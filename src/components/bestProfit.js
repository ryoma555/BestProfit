import React from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { getDisplayDate, getDisplayTime } from '../utils';

const Container = styled(Box)`
    border-radius: 10px;
    box-shadow: 2px 2px 3px 3px #999;
    margin-bottom: 50px;
`;

const Row = styled(Box)`
  border-bottom: solid 1px #999;
  &:last-child {
    border-bottom: none;
  }
`;

const Column = styled.div`
  width: 50%;
  padding: 10px 0;
  &:first-child {
    border-right: solid 1px #999;
  }
`;

const BestProfit = ({ bestCombination, date, currency }) => {
    if (!bestCombination) {
        return <Box className="profit-error">Unable to earn profit</Box>
    }

    return <Container>
        <Box width="300px" className="profit-result">
            <Row py={1}>
                {getDisplayDate(date, 'YYYYMMDD')}
            </Row>
            <Row bgcolor="#dedede" py={1} fontWeight="fontWeightBold">
                {currency}
            </Row>
            <Row display="flex" fontWeight="fontWeightBold">
                <Box py={1} borderRight="solid 1px #dedede" width="50%">Buy</Box>
                <Box py={1} width="50%">Sell</Box>
            </Row>
            <Row display="flex">
                <Column>${bestCombination.buy.price}</Column>
                <Column>${bestCombination.sell.price}</Column>
            </Row>
            <Row display="flex">
                <Column>{getDisplayTime(bestCombination.buy.time)}</Column>
                <Column>{getDisplayTime(bestCombination.sell.time)}</Column>
            </Row>
            <Row py={1}>Profit: ${Number((bestCombination.profit).toFixed(2))}</Row>
        </Box>
    </Container>
};

export default (BestProfit);
