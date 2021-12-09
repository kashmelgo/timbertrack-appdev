import React from 'react';
import ReactTable from 'react-table';
import Button from 'react-bootstrap/Button';
import 'react-table/react-table.css';
import styled from 'styled-components';

const Roles = ({
  filteredRoles,
  openEditForm,
  deleteRole,
}) => {
  const columns = React.useMemo(
    () => [
      {
        columns: [
          { Header: 'ID', accessor: 'id', minWidth: 50, maxWidth: 60 },
          { Header: 'Name', accessor: 'name' },
          { Header: 'Department', accessor: 'department' },
          { Header: 'Salary', accessor: 'salary' },
          { Header: 'Assigned', accessor: 'assigned', show: false },
          {
            Header: 'Actions',
            id: 'actions',
            width: 140,
            Cell: ({ row }) => {
              return (
                <div>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => openEditForm(row.id)}
                  >
                    Edit
                  </Button>
                  <StyledButton
                    variant="danger"
                    size="sm"
                    onClick={() => deleteRole(row.id)}
                  >
                    Delete
                  </StyledButton>
                </div>
              );
            },
          },
        ],
      },
    ],
    [],
  );

  return (
    <ReactTable
      className="-striped -highlight"
      data={filteredRoles}
      columns={columns}
      defaultPageSize={10}
      style={{
        borderColor: '#a5a4a4',
        borderRadius: '5px',
        borderStyle: 'outset',
      }}
    />
  );
};

const StyledButton = styled(Button)`
  margin-left: 5px;
`;

export default Roles;
