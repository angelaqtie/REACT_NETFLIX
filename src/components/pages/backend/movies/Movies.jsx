import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  FileVideo,
  Moon,
  Plus,
  Search,
  Settings,
  Trash2,
} from "lucide-react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { imgPath } from "@/components/helpers/functions-general";
import SideNavigation from "../partials/SideNavigation";
import Searchbar from "../partials/Searchbar";
import Pills from "../partials/Pills";
import ModalDelete from "../partials/modals/ModalDelete";
import ModalConfirm from "../partials/modals/ModalConfirm";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalError from "../partials/modals/ModalError";
import ToastSuccess from "../partials/ToastSuccess";
import LoadMore from "../partials/LoadMore";
import SpinnerWindow from "../partials/spinners/SpinnerWindow";
import SpinnerTable from "../partials/spinners/SpinnerTable";
import TableLoader from "../partials/TableLoader";
import IconNoData from "../partials/IconNoData";
import IconServerError from "../partials/IconServerError";
import ModalAddMovie from "./ModalAddMovie";
import MoviesTable from "./MoviesTable";
import ModalView from "./ModalView";
import { StoreContext, StoreProvider } from "@/components/store/storeContext";
import { setIsAdd, setMessage } from "@/components/store/storeAction";
import React from "react";

const Movies = () => {
  const { dispatch, store } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="movies" />
          <main>
            <Header title="Movies" subtitle="List of available movies" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <Searchbar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <MoviesTable />
            </div>
            <Footer />
          </main>
        </div>
      </section>

      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAddMovie />}
    </>
  );
};

export default Movies;
