# pages/api/upload.py
import os
from flask import Flask, request
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Pinecone, Chroma
from langchain.embeddings.openai import OpenAIEmbeddings
import pinecone

app = Flask(__name__)

PINECONE_API_KEY = os.environ.get("PINECONE_API_KEY")
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
index_name = "YOUR_INDEX_NAME"

# Initialize Pinecone
pinecone.init(api_key=PINECONE_API_KEY)
embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)

@app.route("/upload", methods=["POST"])
def upload_files():
    files = request.files.getlist("files")

    pdf_paths = []

    # Save the uploaded files
    for file in files:
        path = f'pdfs/{file.filename}'
        pdf_paths.append(path)
        file.save(path)

    # Process the PDFs
    annual_reports = []
    for pdf in pdf_paths:
        loader = PyPDFLoader(pdf)
        document = loader.load()
        annual_reports.append(document)

    # Split the annual reports into smaller pieces
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=0)
    chunked_annual_reports = []
    for annual_report in annual_reports:
        texts = text_splitter.split_documents(annual_report)
        chunked_annual_reports.append(texts)

    # Upsert annual reports to Pinecone
    for chunks in chunked_annual_reports:
        Pinecone.from_texts([chunk.page_content for chunk in chunks], embeddings, index_name=index_name)

    return {"message": "Files uploaded and processed successfully!"}, 200

if __name__ == "__main__":
    app.run(debug=True)
