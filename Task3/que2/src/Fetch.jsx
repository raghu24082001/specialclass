import React, { useEffect, useState, useRef } from "react";

const Fetch = () => {
  const inputRef = useRef(null);

  const [users, setUsers] = useState([]);
  const [show, setShow] = useState([]);
  const [filter, setFilter] = useState({ filname: "" });
  const [store, setStore] = useState([]);

  // Fetch users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();

        setUsers(data); // original data
        setShow(data); // displayed data
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchText = filter.filname.trim();

    if (searchText) {
      // Save recent search
      setStore((prev) => [...prev, searchText]);
    }

    const filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setShow(filteredData);

    // Clear input after search (optional)
    setFilter({ filname: "" });

    // Focus again
    inputRef.current?.focus();
  };

  return (
    <>
      <h3>Recent Searches</h3>

      <ul>
        {store.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="filname"
          value={filter.filname}
          onChange={handleChange}
          ref={inputRef}
          placeholder="Search user..."
        />

        <input type="submit" value="Search" />
      </form>

      <h3>Users</h3>

      <ul>
        {show.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Fetch;