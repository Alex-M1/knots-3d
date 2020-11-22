import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { FacebookShareButton, TelegramShareButton, TwitterShareButton, ViberShareButton, VKShareButton, WhatsappShareButton, TelegramIcon, FacebookIcon, TwitterIcon, ViberIcon, VKIcon, WhatsappIcon } from 'react-share';
import styles from '../../css/Share.module.css'





export default function Share() {
    let [pathImg, setPathImg] = useState("img/icons/shareline.png")
    let [buttonsStyle, setButtonStyle] = useState(-50)


    const buttonTouchStart = () => setPathImg("img/icons/sharefill.png")
    const buttonTouchEnd = () => setPathImg("img/icons/shareline.png")

    const shareButtons = () => {
        setButtonStyle(buttonsStyle === -50 ? buttonsStyle = 0 : buttonsStyle = -50)
    }

    return (
        <>
            <IconButton
                onTouchStart={buttonTouchStart}
                onTouchEnd={buttonTouchEnd}
                onMouseDown={buttonTouchStart}
                onMouseUp={buttonTouchEnd}
                onClick={shareButtons}
            >
                <img
                    src={pathImg}
                    alt="share"
                    style={{ width: '2rem' }}

                />
            </IconButton>

            <div className={styles.shareButtons} style={{ left: buttonsStyle }} >
                <FacebookShareButton url='knots.exyte.top'><FacebookIcon size={40} /></FacebookShareButton>
                <TelegramShareButton url='knots.exyte.top'><TelegramIcon size={40} /></TelegramShareButton>
                <TwitterShareButton url='knots.exyte.top'><TwitterIcon size={40} /></TwitterShareButton>
                <VKShareButton url='knots.exyte.top'><VKIcon size={40} /></VKShareButton>
                <ViberShareButton url='knots.exyte.top'><ViberIcon size={40} /></ViberShareButton>
                <WhatsappShareButton url='knots.exyte.top'><WhatsappIcon size={40} /></WhatsappShareButton>
            </div>
        </>

    )
}
