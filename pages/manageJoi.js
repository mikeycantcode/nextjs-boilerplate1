import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../src/AuthContext';
import { Box, Grid, TextField, Slider, Switch, FormControlLabel, Button } from '@mui/material';

const TextBoxes = () => {
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <TextField label="Text Box 1" multiline rows={4} fullWidth sx={{ color: 'pink' }} />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Text Box 2" multiline rows={4} fullWidth sx={{ color: 'pink' }} />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Text Box 3" multiline rows={4} fullWidth sx={{ color: 'pink' }} />
            </Grid>
        </React.Fragment>
    );
};

const Sliders = () => {
    const marks = [
        { value: 0.1 },
        { value: 0.2 },
        { value: 0.3 },
        { value: 0.4 },
        { value: 0.5 },
    ];

    return (
        <React.Fragment>
            <Grid item xs={12}>
                {marks.map((mark, index) => (
                    <Slider
                        key={index}
                        defaultValue={mark.value}
                        step={0.1}
                        min={0.1}
                        max={0.9}
                        marks={[]}
                        valueLabelDisplay="off"
                        sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', height: 20 }}
                    // Adjust the height value as per your requirement
                    />
                ))}
            </Grid>
        </React.Fragment>
    );
};

const M12 = () => {
    const user = useContext(AuthContext);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        // Set the expand state to true after a delay to trigger the animation
        const timer = setTimeout(() => {
            setExpand(true);
        }, 50); // Adjust the delay as needed

        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (!user) {
        // Not signed in. You can redirect to the sign-in page here.
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div
                className={`bg-white rounded-3xl p-4 transition-all duration-500 shadow-lg ${expand ? 'w-5/6 h-5/6' : 'w-16 h-16'
                    }`}
                style={{ zIndex: '2', marginTop: '-10vh' }}
            >
                <h1 className={`text-center transition-opacity duration-500 ${expand ? 'opacity-100' : 'opacity-0'}`}>
                    create-job-now
                </h1>

                <Box mt={2}>
                    <Grid container spacing={2}>
                        <TextBoxes />
                        <Sliders />
                        <Grid item xs={12}>
                            <FormControlLabel control={<Switch />} label="Model Acceleration" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className="your-element-with-z-index-minus-one"></div>
        </div>
    );
};

export default M12;
