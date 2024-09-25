import { useState, useEffect, useRef } from "react";

export default function Api() {
  const [getData, setUserData] = useState([]);
  const [postData, setPostData] = useState(null); // Updated to handle the response object

  const getRequest = async () => {
    try {
      const header = { "Content-Type": "application/json" };
      const page = document.getElementById('Unique').value;
      const req = await fetch("https://reqres.in/api/users?page=" + page, { method: "GET", headers: header });
      const response = await req.json();
      console.log("GET Response:", response);
      setUserData(response["data"]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);



  const Getapirequest = async () => {
    const Url = "https://reqres.in/api/unknown";
    const Value = [{
      name: "Vijay",
      email: "vijays17111997@gmail.com",
      password: "vijay@1997"
    },
    {
      name: "Rizwan",
      email: "viwedrs17@gmail.com",
      password: "vijasdeecf97"
    },
    {
      name: "Viji",
      email: "vijicdvfets@gmail.com",
      password: "vifvgrx34"
    },
    {
      name: "john",
      email: "vxeemfnvjf@gmail.com",
      password: "cfkkj$3627"
    },
    {
      name: "Rockey",
      email: "cmckmrocmknj@gmail.com",
      password: "mknmnkjj3y7n"
    }];

    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Value)
    };

    try {
      const frame = await fetch(Url, option);
      const req = await frame.json();
      console.log("POST Response:", req);

      // Assuming the response is { id: '...', createdAt: '...' }
      setPostData(req);  // Store the response directly

    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    Getapirequest();
  }, []);

  return (
    <>
      {/* Section for GET request */}
      <div className="active-data" style={{ display: "flex" }}>
        {getData.map((element, index) => (
          <div className="single-service-item" key={index}>
            <img src={element.avatar} alt={`${element.first_name} ${element.last_name}`} />
            <h2>{element.first_name} {element.last_name}</h2>
            <p>{element.email}</p>
          </div>
        ))}
      </div>

      <div className="data-one">
        <select id="Unique" onChange={getRequest}>
          <option value="1">Page 1</option>
          <option value="2">Page 2</option>
          <option value="3">Page 3</option>
          <option value="4">Page 4</option>
        </select>
      </div>

      <section>
      <div className="value-data">
        <button className="spect" onClick={Getapirequest}>POST Method</button>
      </div>
    </section>
    </>
  );
}
