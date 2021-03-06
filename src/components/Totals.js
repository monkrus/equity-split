import React from 'react'
import PropTypes from 'prop-types'
import { formatCurrency, formatLocalCurrency } from '../utils/Utils'

export default function Totals({totals}) {

  if(Object.keys(totals).length !== 0) {
    return(
      <tr>
          <td>{'Totals'}</td>
          <td>{''}</td>
          <td>{formatCurrency(totals.totalShare)}</td>
          <td>{formatLocalCurrency(totals.totalShareNumbers)}</td>
          <td>{totals.totalSharePercent.toFixed(2)}</td>
          <td>{totals.totalFixedShare.toFixed(2)}</td>
          <td>{formatCurrency(totals.totalNonCash)}</td>
          <td>{formatCurrency(totals.totalInvestedCash)}</td>
          <td>{''}</td>
          <td>{totals.totalDays}</td>
          <td>{''}</td>
          <td>{totals.totalWorkedHours}</td>
          <td>{''}</td>
          <td>{formatCurrency(totals.totalSalary)}</td>
      </tr>
    );
  }else
    return false
}

Totals.PropTypes = {
  totals : PropTypes.object
}
