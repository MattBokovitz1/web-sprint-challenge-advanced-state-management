import React, { useEffect } from "react";
import Details from "./Details";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions/actions.js";

const List = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <>
      <h2>List of Smurfs</h2>
      {props.smurfs.map((smurf) => (
        <Details key={smurf.id} smurf={smurf} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    errors: state.errors,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(List);
