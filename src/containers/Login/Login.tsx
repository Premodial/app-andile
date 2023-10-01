import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // Ensure you have the correct path to AuthContext.tsx
import { Button, TextField, Card, CardContent, Typography, Grid } from '@mui/material';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            await login(email, password); 
            setError(null);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Card variant="outlined"  style={{ width: 600}} >
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Login
                    </Typography>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextField
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth
                            />
                        </Grid>
                        {error && (
                            <Grid item>
                                <Typography variant="body2" color="error">
                                    {error}
                                </Typography>
                            </Grid>
                        )}
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

export  {Login};
