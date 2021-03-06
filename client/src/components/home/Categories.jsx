import {Button, makeStyles, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import { categories } from '../../constants/data';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    create:{
        margin:20,
        backgroundColor:'#6495ed',
        color:'#fff',
        width:'86%'
    },
    table:{
        border:'1px solid rgba(224, 224, 224, 1)',
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
});

const Categories = () =>{
    const Classes = useStyles();
    return(
        <>
            <Link to={'/create'} className={Classes.link}><Button variant='contained' className={Classes.create}>Create Blog</Button></Link>
            <Table className={Classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link to={`/`} className={Classes.link}>
                                All Categories
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category=>(
                            <TableRow>
                                <TableCell>
                                    <Link to={`/?category=${category}`} className={Classes.link}>{category}</Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </>
    )
}

export default Categories;