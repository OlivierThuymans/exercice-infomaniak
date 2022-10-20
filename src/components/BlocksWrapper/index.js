import './style.scss';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl';

import IconBox1 from '../../assets/icons/Group 50048.png';
import IconBox2 from '../../assets/icons/Frame 50232.png';
import IconBox3 from '../../assets/icons/Frame 492807.png';
import BgImage1 from '../../assets/images/Group 50122.png';
import BgImage2 from '../../assets/images/Group 50123.png';
import BgImage3 from '../../assets/images/Group 50161.png';
import ButtonArrow from '../../assets/icons/right-arrow.png';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const BlocksWrapper = () => {

    const navigate = useNavigate();

    const selectedLanguage = useSelector((state) => state.language);

    const intl = useIntl();
    const blocksData = intl.messages['blocks_data'];

    const handleIconDisplay = (index) => {
        switch(index + 1) {
            case 1:
                return IconBox1;
            case 2:
                return IconBox2;
            case 3: 
                return IconBox3;
            }
    };

    const handleBgImageDisplay = (index) => {
        switch(index + 1) {
            case 1:
                return BgImage1;
            case 2:
                return BgImage2;
            case 3: 
                return BgImage3;
            }
    };

    return (
        <main>
            <Container 
                maxWidth='xl'
                className='container'
            >
                {blocksData.map((item, index) => 
                    <Box className='container__box'>
                        <div className='bg'>
                            <img src={handleBgImageDisplay(index)} alt={selectedLanguage == 'FR' ? 'Image Illustrative' : 'Illustrative Picture'} />
                        </div>

                        <div className='content'>
                            <div className='content__icon_wrapper'>
                                <img src={handleIconDisplay(index)} alt={selectedLanguage == 'FR' ? 'Icone' : 'Icon'} />
                            </div>
                            <div className='content__text_wrapper'>
                                <h2>{blocksData[index].title}</h2><br />
                                <p>{blocksData[index].content}</p>
                                <button onClick={() => navigate('')}>
                                    <FormattedMessage id='blocks_more' />
                                    <img src={ButtonArrow} /></button>
                            </div>
                        </div> 
                    </Box>
                )}
            </Container>
        </main> 
    )
}

export default BlocksWrapper;