import React from 'react';
import { Box, Typography, Button, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { loadData } from '../actions';
import BestProfit from './bestProfit';
import styled from 'styled-components';
import { getBestCombination } from '../utils';

const ProfitContainer = styled(Box)`
  margin: 100px auto;
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const BestProfitSummary = ({state, loadData}) => {

  return <Box mt={10}>
    <Typography variant="h2" component="h2">
      Best Profit Summary
    </Typography>
    <Box mt={5}>
      {state.isLoading
        ? <CircularProgress className="loading-spinner" color="secondary" />
        : <Button color="primary" variant="contained" onClick={loadData}>Retrieve Summary</Button>
      }
    </Box>
    <ProfitContainer>
      {state.data.map(prices => {
        return <BestProfit
            key={prices.currency}
            bestCombination={getBestCombination(prices.quotes)}
            date={prices.date}
            currency={prices.currency}>
          </BestProfit>
      })}
    </ProfitContainer>
  </Box>
};

const mapStateToProps = (state) => {
  console.log(state)
  return ({
    state
})};

const mapDispatchToProps = dispatch => ({
  loadData: (id, index, tips) => {
    dispatch(loadData({ id, index, tips }));
  },
});



const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(BestProfitSummary);
