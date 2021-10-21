import React from "react";
import Layout from "../components/Layout";

function ViewResults() {
  const data = [
    {
      id: 1,
      name: "Lorem ipsum",
      date: "11 May, 2046",
    },
    {
      id: 2,
      name: "Lorem ipsum",
      date: "11 May, 2046",
    },
    {
      id: 3,
      name: "Lorem ipsum",
      date: "11 May, 2046",
    },
    {
      id: 4,
      name: "Lorem ipsum",
      date: "11 May, 2046",
    },
    {
      id: 5,
      name: "Lorem ipsum",
      date: "11 May, 2046",
    },
    {
      id: 6,
      name: "Lorem ipsum",
      date: "11 May, 2046",
    },
  ];
  return (
    <div>
      <Layout>
        <div className="view">
          <div>
            <h2>View Results</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, name, date }, index) => (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{date}</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
}

export default ViewResults;
