import React from "react";
import { MdEditSquare, MdOutlineRateReview, MdPrint, MdSignLanguage } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaPen, FaSign} from "react-icons/fa"
import FileUpload from "./FileUpload";

const Page1A = () => {
  return (
    <div className="doc">
      <table className="table mt-5">
        <tbody>
          <tr>
            <td className="text-center fw-normal fs-3 doc-head">
                DOCUMENT-1
            </td>
            <td className="fs-4 doc-ed">
              Edit <MdEditSquare />
            </td>
            <td className="fs-4 doc-ed">
              View <MdOutlineRateReview />
            </td>

            {/* <td className="fs-4 doc-ed">
              <NavLink to="/" className="text-decoration-none">
                Print <MdPrint />
              </NavLink>
            </td> */}
            <td className=" d-flex flex-direction-column">
              {/* <NavLink to="/" className="text-decoration-none"> */}
                <FileUpload/>
              {/* </NavLink> */}
            </td>
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
    </div>
  );
};

export default Page1A;
