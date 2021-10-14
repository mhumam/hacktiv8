import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import { useFetch } from 'hooks';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    width: '50%',
    boxShadow: 24,
    p: 4,
};

const MovieCard = ({ title, year, image, ...props }) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }} {...props}>
                <CardMedia component="img" image={image} alt={title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{year}</Typography>
                </CardContent>
            </Card>
        </>
    )
}

export const DetailMovie = ({ open, handleClose, movieId }) => {
    /* for fetching data */
    const { data, isLoading, setParams } = useFetch('https://www.omdbapi.com');

    useEffect(() => {
        movieId && setParams({ apiKey: '7acdd46', i: movieId })
    }, [movieId, setParams])

    const rows = [
        { name: 'Title', value: data?.Title },
        { name: 'Released', value: data?.Released },
        { name: 'Director', value: data?.Director },
        { name: 'Actors', value: data?.Actors },
        { name: 'Genre', value: data?.Genre },
        { name: 'Plot', value: data?.Plot }
    ];

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style}>
                {
                    isLoading ?
                        <Box sx={{ display: 'block', textAlign: 'center' }}>
                            <CircularProgress />
                        </Box> :
                        <>
                            <Typography id="modal-modal-title" variant="h4" component="h2" mb={4} style={{ textAlign: 'center' }}>
                                {data?.Title}
                            </Typography>
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell style={{ width: '20%' }} component="th" scope="row">
                                                    <b>{row.name}</b>
                                                </TableCell>
                                                <TableCell>{row.value}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                }
            </Box>
        </Modal>
    )
}

export default MovieCard
