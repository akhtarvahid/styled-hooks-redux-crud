import React from "react";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaEdit, FaBook } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrTooltip } from "react-icons/gr";

import './listItem.scss';

function ListItem({ lists, onHandleEdit, onDelete, onChecked,
  AnyChecked, handleAllChecked, deleteAll }) {

  const renderTooltip = (list) => {
    return (
      <>
        <span>{list.title.length > 15 ?
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip>
                {list.title}
              </Tooltip>
            }>
            <span className="tooltip-text">
              {list.title.substring(0, 15).trim() + '...'}
              <GrTooltip />
            </span>
          </OverlayTrigger>
          : list.title}
        </span>
      </>
    )
  }
  return (
    <>
      <Table responsive className="table"
        style={{ display: lists.length < 1 && 'none' }}>
        <thead>
          <tr>
            <th><FaBook /></th>
            <th>Title</th>
            <th className="remove">Description</th>
            <th>
              <span className="action">Action</span>
              <span className={AnyChecked ? 'check-all action-border' : 'check-all'}>
                {AnyChecked && <span>All</span>}
                <input type="checkbox" onChange={handleAllChecked}
                  checked={AnyChecked} />
                {AnyChecked && <MdDelete className="delete" onClick={deleteAll}
                alt="delete"/>}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {lists &&
            lists.map((list) => (
              <tr key={list.id} className={list.completed ? 'selected' : ''}>
                <td><FaBook /></td>
                <td>{renderTooltip(list)}</td>
                <td className="remove">{list.description.length > 20 ? list.description.substring(0, 20).trim() + '...' : list.description}</td>
                <td className="table_edit">
                  <div>
                    <FaEdit onClick={() => onHandleEdit(list)} />
                    <input key={list.id} onChange={onChecked} type="checkbox" checked={list.completed} value={list.title} />
                    {list.completed && <MdDelete className="delete" onClick={() => onDelete(list)} alt="delete"/>}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="table_no-content">
        {lists.length < 1 &&
          'All Items are deleted'
        }
      </div>
    </>
  );
}

export default ListItem;