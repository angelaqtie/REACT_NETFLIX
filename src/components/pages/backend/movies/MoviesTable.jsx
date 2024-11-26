import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  FileVideo,
  Trash2,
} from "lucide-react";
import React from "react";
import Pills from "../partials/Pills";
import IconServerError from "../partials/IconServerError";
import LoadMore from "../partials/LoadMore";
import SpinnerTable from "../partials/spinners/SpinnerTable";
import TableLoader from "../partials/TableLoader";
import IconNoData from "../partials/IconNoData";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
  setIsEdit,
  setIsView,
} from "@/components/store/storeAction";
import ModalDelete from "../partials/modals/ModalDelete";
import ModalConfirm from "../partials/modals/ModalConfirm";
import { movies } from "./datamovies";
import ModalView from "./ModalView";

const MoviesTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [movieInfo, setMovieInfo] = React.useState("");
  let counter = 1;

  const handleEdit = () => {
    dispatch(setIsAdd(true));
  };
  const handleView = (item) => {
    dispatch(setIsView(true));
    setMovieInfo(item);
  };
  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
  };
  const handleArchive = () => {
    dispatch(setIsConfirm(true));
  };
  return (
    <>
      <div className="p-4 bg-secondary mt-10 rounded-md border border-line relative">
        {/* <SpinnerTable /> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={20} cols={4} /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th className="w-[50%]" c>
                  Title
                </th>
                <th>Year</th>
                <th>Duration</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
              <td colSpan={100}>
                <IconNoData />
              </td>
            </tr> */}

              {/* <tr>
              <td colSpan={100}>
                <IconServerError />
              </td>
            </tr> */}
              {movies.map((item, key) => (
                <tr key={key}>
                  <td>{counter++}</td>
                  <td>
                    <Pills />
                  </td>
                  <td>{item.movie_title}</td>
                  <td>{item.movie_year}</td>
                  <td>{item.movie_duration}</td>
                  <td>
                    <ul className="table-action">
                      {item.movie_is_active ? (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="View"
                              onClick={() => handleView(item)}
                            >
                              <FileVideo />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Edit"
                              onClick={() => handleEdit()}
                            >
                              <FilePenLine />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Archive"
                              onClick={handleArchive}
                            >
                              <Archive />
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Restore"
                              onClick={() => handleRestore()}
                            >
                              <ArchiveRestore />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={() => handleDelete()}
                            >
                              <Trash2 />
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <LoadMore />
        </div>
      </div>

      {store.isDelete && <ModalDelete />}
      {store.isConfirm && <ModalConfirm />}
      {store.isView && <ModalView movieInfo={movieInfo} />}
    </>
  );
};

export default MoviesTable;
