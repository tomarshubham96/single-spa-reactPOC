import React from "react";
import ReactDOM from 'react-dom';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import singleSpaReact from 'single-spa-react';

function formatOurData(columnName, semOneMarks, semTwoMarks) {
    return { columnName, semOneMarks, semTwoMarks };
  }
    
  const SampleData = [
    formatOurData("Maths", 55, 66),
    formatOurData("English", 44, 94),
    formatOurData("Hindi", 67, 85),
    formatOurData("Computer", 68, 95),
    formatOurData("Science", 56, 85),
  ];
    
export default function Table1 (){
    return ( 
        <Paper>
        <div style={{ display: "block", padding: 30 }}>
      <h4>How to use Table Component in ReactJS?</h4>
      <TableContainer component={Paper}>
        <Table
          style={{
            width: 600,
          }}
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell>Subject Name</TableCell>
              <TableCell align="right">
                  Sem-I Marks
              </TableCell>
              <TableCell align="right">
                  Sem-II Marks
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SampleData.map((row) => (
              <TableRow key={row.columnName}>
                <TableCell component="th" scope="row">
                  {row.columnName}
                </TableCell>
                <TableCell align="right">
                    {row.semOneMarks}
                </TableCell>
                <TableCell align="right">
                    {row.semTwoMarks}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </Paper>
     );
}

const table1Lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Table1
});

export const bootstrap = table1Lifecycles.bootstrap;
export const mount = table1Lifecycles.mount;
export const unmount = table1Lifecycles.unmount;