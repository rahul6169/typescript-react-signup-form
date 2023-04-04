import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Button, DatePicker } from "antd";
import { useState } from "react";
import { CREATE_CUSTOMER } from "./query";

const Merchant = () => {
  const [merchantList, setMerchantList] = useState([]);
  const [date, setDate] = useState(null);
  const [createCustomer, { loading }] = useMutation(CREATE_CUSTOMER);

  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    number: "",
    contactName: "",
    contactEmail: "",
    contactPhoneNumber: "",
  });
  const handleClick = async (event: any) => {
    event.preventDefault();
    console.log(formValues);
    try {
      const createAuthUserDto = {
        userName: formValues?.userName,
        email: formValues?.email,
        number: formValues?.number,
        contactName: formValues?.contactName,
        contactEmail: formValues?.contactEmail,
        contactPhoneNumber: formValues.contactPhoneNumber,
      };

      await createCustomer({
        variables: {
          createAuthUserDto: createAuthUserDto,
        },
        refetchQueries: ["CreateCustomer"],
      });
    } catch (error) {}
  };

  return (
    <>
      <form onSubmit={handleClick} id="newBusiness">
        <h2>
          <em>New Business </em>
        </h2>

        <div>
          <label>User Name </label>
          <input
            type="text"
            value={formValues.userName}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  userName: e.target.value,
                };
              });
            }}
            id="userName"
            name="userName"
            placeholder="Enter Your Name"
            required
          ></input>
        </div>

        <div>
          <label>Email </label>
          <input
            type="email"
            value={formValues.email}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              });
            }}
            id="email"
            placeholder="Enter Your Email"
            required
          ></input>
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            value={formValues.number}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  number: e.target.value,
                };
              });
            }}
            id="phoneNumber"
            minLength={5}
            maxLength={10}
            placeholder="Enter Your Number"
            required
          ></input>
        </div>

        <div>
          <label>Contact Name </label>
          <input
            type="text"
            value={formValues.contactName}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  contactName: e.target.value,
                };
              });
            }}
            id="contactName"
            placeholder="Enter Your Name"
          ></input>
        </div>

        <div>
          <label> Contact Email </label>
          <input
            type="email"
            value={formValues.contactEmail}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  contactEmail: e.target.value,
                };
              });
            }}
            id="contactEmail"
            placeholder="Enter Contact Email"
            required
          ></input>
        </div>

        <div>
          <label>Contact Number</label>
          <input
            type="tel"
            value={formValues.contactPhoneNumber}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  contactPhoneNumber: e.target.value,
                };
              });
            }}
            id="contactPhoneNumber"
            minLength={5}
            maxLength={10}
            placeholder="Enter Contact Number"
          ></input>
        </div>

        <div>
          <button type="submit" id="submitButton" value="Submit">
            Submit
          </button>
        </div>
      </form>

      {/* <div className="table-data">
        <table id="list">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Contact Name</th>
              <th>Contact Email</th>
              <th>Contact Phone Number</th>
              <th>Type</th>
              <th>Percent</th>
              <th>Activefrom</th>
              <th>Payments</th>
              <th>Notes</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="tableData">
            {merchantList?.map((merchant, index): any => (
              <tr key={merchant?._id + index}>
                <td>{merchant?.userName}</td>
                <td>{merchant?.email}</td>
                <td>{merchant?.number}</td>
                <td>{merchant?.contactName}</td>
                <td>{merchant?.contactEmail}</td>
                <td>{merchant?.contactPhoneNumber}</td>

                <td>
                  <Button shape="round" icon={<EditFilled />}></Button>
                </td>
                <td>
                  <Button shape="round" icon={<DeleteFilled />}></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
};
export { Merchant };
