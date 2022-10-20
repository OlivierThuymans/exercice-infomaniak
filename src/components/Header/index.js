import './style.scss';

import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';

import { setLanguage } from '../../actions';

import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

const Header = () => {

    const dispatch = useDispatch();

    const handleSwitchOnChange = (e) => {
        if(e.target.checked) {
            dispatch(setLanguage('EN'));
        } else {
            dispatch(setLanguage('FR'));
        }
    } 

    return (
            <header>
                <div className='language_selection'>
                    <span>FR</span><Switch color='default' onChange={handleSwitchOnChange} /><span>EN</span>
                </div>

                <div className='intro'>
                    <h1><FormattedMessage 
                        className='intro__text' 
                        id='header_content'
                        values={{ br: <br />, strong: (word) => <strong className='intro__text intro__text--important'>{word}</strong>}}
                    /></h1> 
                </div>
            </header>
    )
}

export default Header;