import React from "react";
import { MdEditSquare, MdOutlineRateReview } from "react-icons/md";
import FileUpload from "./FileUpload";

const Page1A = () => {
  return (
    <>
      <table className="table mt-5">
        <tbody>
          <tr>
            <td className="text-center fw-normal fs-3 doc-head" scope="row">
              DOCUMENT-1
            </td>
            <td className="fs-4 doc-ed">
              Edit <MdEditSquare />
            </td>
            <td className="fs-4 doc-ed">
              View <MdOutlineRateReview />
            </td>
            {/* <td className=" d-flex flex-direction-column">
            <FileUpload />
          </td> */}
          </tr>
          {/* <tr>
            <td className="text-center fw-normal fs-3 doc-head">
              ESTATE REAL DOCUMENT
            </td>
            <td className="fs-4 doc-ed">
              Edit <MdEditSquare />
            </td>
            <td className="fs-4 doc-ed">
              View <MdOutlineRateReview />
            </td>
            <td className="fs-4 doc-ed">
              <NavLink to="/1b" className="text-decoration-none">
                Print <MdPrint />
              </NavLink>
            </td>
            <td className="fs-4 doc-ed">
              <NavLink to="/" className="text-decoration-none">
                Sign <FaPen />
              </NavLink>
            </td>
          </tr>
          <tr>
            <td className="text-center fw-normal fs-3 doc-head">
              COMPANY BOND DOCUMENT
            </td>
            <td className="fs-4 doc-ed">
              Edit <MdEditSquare />
            </td>
            <td className="fs-4 doc-ed">
              View <MdOutlineRateReview />
            </td>
            <td className="fs-4 doc-ed">
              <NavLink to="/1b" className="text-decoration-none">
                Print <MdPrint />
              </NavLink>
            </td>
            <td className="fs-4 doc-ed">
              <NavLink to="/" className="text-decoration-none">
                Sign <FaPen />
              </NavLink>
            </td>
          </tr> */}
        </tbody>
      </table>
      <div className="d-flex justify-content-center my-1">
        <FileUpload />
      </div>
    </>
  );
};

export default Page1A;
