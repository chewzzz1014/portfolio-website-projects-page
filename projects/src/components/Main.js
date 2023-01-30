// for card and card items
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

// react components and logo
import projectData from '../data/projects/projects'
import skills from '../data/icons/skills-icons';
import { BsArrowUpRight } from 'react-icons/bs';
import { MdOutlineExpandMore } from 'react-icons/md';

const buttonStyle = {
    border: 'none',
    padding: '0.5em 1em',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '0.5em',
    fontWeight: 'bold'
}

const accordionBarStyle = {
    backgroundColor: '#242424',
    border: '1px solid white',
    margin: '2em 0em',
    // boxShadow: '10px 15px 20px 0.5px rgba(255, 255, 255, 1)'
}


export const dataElements = projectData.map((ele, idx) => {
    return (
        <Accordion sx={accordionBarStyle} key={idx}>
            <AccordionSummary
                expandIcon={<MdOutlineExpandMore color='white' size='40px' />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography color='white'>
                    {ele.name}
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#242424' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {ele.project.map((p, idx2) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} className='card-container' key={`${idx}-${idx2}`}>
                                    <Card sx={{ maxWidth: 345 }} className='card-item'>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={p.imgLink}
                                            alt="project img"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                                                <b>{p.name}</b>
                                            </Typography>
                                            {p.skills && p.skills.map(s =>
                                                <img src={skills[s]} className='skill-icon' />
                                            )}
                                            <Typography variant="body2" color='black' style={{ textAlign: 'justify' }}>
                                                {p.desc}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {p.srcLink && <Button size="small" sx={buttonStyle}><a href={p.srcLink} target='_blank' rel="noopener noreferrer">Source Code<BsArrowUpRight /></a></Button>}
                                            {p.pageLink && <Button size="small" sx={buttonStyle}><a href={p.pageLink} target='_blank' rel="noopener noreferrer" > Live Site<BsArrowUpRight /></a></Button>}
                                            {p.externalLink && <Button size="small" sx={buttonStyle}><a href={p.externalLink} target='_blank' rel="noopener noreferrer">View on {p.externalSite} <BsArrowUpRight /></a></Button>}
                                            {p.demoLink && <Button size="small" sx={buttonStyle}><a href={p.demoLink} target='_blank' rel="noopener noreferrer">Demo<BsArrowUpRight /></a></Button>}
                                            {p.specialTxt && <Button size="small" sx={buttonStyle}>{p.specialTxt}</Button>}
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
})
