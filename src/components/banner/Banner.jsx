import { styled, Box } from '@mui/material';
import yourImage from '../../images/Breaking.png';

const Image = styled(Box)`
    width: 100%;
    background: url(${yourImage}) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Banner = () => {
    return (
            <Image/>    
    )
}

export default Banner;