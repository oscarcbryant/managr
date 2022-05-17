import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { QUERY_PLAYERS } from '../../utils/queries';
import { useQuery } from '@apollo/client'

const columns = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'firstname', headerName: 'First name', width: 130 },
  { field: 'surname', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  { field: 'email', headerName: 'Email', width: 90 },
  { field: 'position', headerName: 'position', width: 90 },

  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstname || ''} ${params.row.surname || ''}`,
  },
];

const rows = [
  { id: 1, surname: 'Beckham', firstname: 'David', age: 47, email: "david@posh.com", position: "Right Mid-Field" },
  { id: 2, surname: 'Cahill', firstname: 'Tim', age: 42, email: "tim@flagpost.com", position: "Striker" },
  { id: 3, surname: 'Tartt', firstname: 'Jaime', age: 22, email: "jamie@richmond.com", position: "Striker" },
  { id: 4, surname: 'Seaman', firstname: 'David', age: 58, email: "dseaman@keepers.com", position: "Goalkeeper" },
  { id: 5, surname: 'Viduka', firstName: 'Mark', age: 46, email: "viduka@league.com", position: "Striker" },
];

export default function DataTable () {

  const { loading, data } = useQuery(QUERY_PLAYERS)
  console.log('showPlayer: ', data)
  return (
      <>
      <h2>All Players</h2>
        <div style={{ height: 400, width: '100%' }}>
            {data?.players ? 
            <DataGrid
            getRowId={(row) => row._id}
            rows={data?.players}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            /> : 
            <h1>Loading...</h1>}
        </div>
    </>
  );
}

