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

const Movies = () => {
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation />
          <main>
            <Header />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <Searchbar />
                <button className="btn btn-add">
                  <Plus size={16} /> Add New
                </button>
              </div>

              <MoviesTable />
            </div>
            <Footer />
          </main>
        </div>
      </section>

      {/* <ModalDelete /> */}
      {/* <ModalConfirm /> */}
      {/* <ModalValidation /> */}
      {/* <ModalError /> */}
      {/* <ToastSuccess /> */}
      {/* <SpinnerWindow /> */}
      {/* <ModalAddMovie /> */}
      <ModalView />
    </>
  );
};

export default Movies;
