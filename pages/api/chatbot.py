# pages/api/chatbot.py
import os
from flask import Flask, request, jsonify
from langchain.chains import ConversationalRetrievalChain
from langchain.vectorstores import Pinecone, Chroma
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.llms import OpenAI
import pinecone

app = Flask(__name__)

PINECONE_API_KEY = os.environ.get("PINECONE_API_KEY")
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
index_name = "YOUR_INDEX_NAME"

# Initialize Pinecone
pinecone.init(api_key=PINECONE_API_KEY)
embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
vectorstore = Pinecone.from_existing_index(index_name=index_name, embedding=embeddings)

# Create the ConversationalRetrievalChain
qa = ConversationalRetrievalChain.from_llm(
    llm=OpenAI(temperature=0),
    retriever=vectorstore.as_retriever(),
    return_source_documents=True,
)

# Initialize chat history list
chat_history = []

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    question = data.get("question")

    # Pass the question and chat_history to ConversationalRetrievalChain
    result = qa({"question": question, "chat_history": chat_history})

    answer = result["answer"]

    # Add the question and answer to the chat history
    chat_history.append((question, answer))

    return jsonify({"answer": answer}), 200

