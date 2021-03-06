import React from 'react';
import CoinFlip from '../Containers/coinFlip';
import MarbleBag from '../Containers/marbleBag';
import SixSidedDie from '../Containers/sixSidedDie';
import EightSidedDie from '../Containers/eightSidedDie';
import TwelveSidedDie from '../Containers/twelveSidedDie';
import TwentySidedDie from '../Containers/twentySidedDie';
import { CHANGE_PAGE } from '../Actions/changePageAction';
import AllExperiments from '../Components/allExperiments';

export const Pages = {
    coinFlip: <CoinFlip />,
    marbleBag: <MarbleBag />,
    sixSidedDie: <SixSidedDie />,
    eightSidedDie: <EightSidedDie />,
    twelveSidedDie: <TwelveSidedDie />,
    twentySidedDie: <TwentySidedDie />,
    allExperiments: <AllExperiments />
}

const initialState = Pages.allExperiments;

export default function changePageReducer(state = initialState, { type, payload }) {
    switch (type) {
        case CHANGE_PAGE: state = payload; break;
        default: state = Object.assign({}, state); break;
    }
    return state;
}