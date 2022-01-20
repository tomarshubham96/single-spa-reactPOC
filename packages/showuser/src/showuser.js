import React from 'react';
import ReactDOM from 'react-dom';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import singleSpaReact from 'single-spa-react';
import store from 'store/store';

export default function showuser (){
  const [data1, setData1] = React.useState(store.Chart2Data);
  const [users, setUsers] = React.useState(store.users);
  React.useEffect(() => {
    store.subscribe(() => {
      setData1(store.Chart2Data);
      setUsers(store.users); //Get Users Data
    });
  }, []);

    return ( 
      <>
        <Paper>
         <div style={{ display: "block", padding: 30 }}>
      <h4>Showing the name entered</h4>
      <TableContainer component={Paper}>
        <Table
          style={{
            width: 600,
          }}
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight:"bold"}}>Name Entered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              {row.name.length>0 && 
                <TableRow key={row.columnName}>
                <TableCell component="th" scope="row">
                  row.name
                </TableCell>
              </TableRow>}
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
        </Paper>
      </>
     );
}


const showuserLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: showuser
});

export const bootstrap = showuserLifecycles.bootstrap;
export const mount = showuserLifecycles.mount;
export const unmount = showuserLifecycles.unmount;