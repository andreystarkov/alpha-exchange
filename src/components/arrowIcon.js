import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { rem } from 'polished'
import images from '../images'

export const ArrowIcon = styled.div`
    position: absolute;
    width: 35.71px;
    height: 21.01px;
    right: 50px;
    top: 200px;
    /* transform: rotate(90deg); */

`
function ArrowComponent () {
    return (
        <ArrowIcon>
            <img src={images.arrowIcon.default} alt=".." />
        </ArrowIcon>
        
    )
}

export default ArrowComponent