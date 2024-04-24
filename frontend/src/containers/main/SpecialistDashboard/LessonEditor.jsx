import React, { useState, useRef, useEffect } from "react";
import "./LessonEditor.scss";
import CodeEditor from "../CodeEditor/CodeEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

const LessonEditor = () => {
  const [elements, setElements] = useState([]);
  const [formHeight, setFormHeight] = useState("auto");
  const formRef = useRef(null);
  const [lessonName, setLessonName] = useState("");
  const [textInputs, setTextInputs] = useState({});
  const codeEditorRefs = useRef([]);

  useEffect(() => {
    const calculateHeight = () => {
      const windowHeight = document.querySelector(
        ".text-editor-window"
      ).offsetHeight;
      const seTitleHeight = document.querySelector("#seTitle").offsetHeight;
      const lessonnameFormHeight =
        document.querySelector("#lessonname-form").offsetHeight;
      const lessonControlHeight =
        document.querySelector(".lesson-control").offsetHeight;
      const availableHeight =
        windowHeight -
        seTitleHeight -
        lessonnameFormHeight -
        lessonControlHeight;
      setFormHeight(availableHeight);
    };

    calculateHeight();

    window.addEventListener("resize", calculateHeight);

    return () => window.removeEventListener("resize", calculateHeight);
  }, [elements]);

  const addElement = (type) => {
    const newElement = { type };
    setElements([...elements, newElement]);

    // Initialize content for text and list elements
    if (type === "text" || type === "list") {
      setTextInputs((prevInputs) => ({
        ...prevInputs,
        [`${type}_${elements.length}`]: "",
      }));
    }
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    setTextInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // text
  const output = {
    lesson: "",
    content: []
  };

  const handleSubmit = () => {
    output.lesson = lessonName;
    elements.forEach((element, index) => {
      switch (element.type) {
        case "text":
          output.content.push({
            type: "paragraph",
            text: textInputs[`${element.type}_${index}`]
          });
          break;
        case "list":
          output.content.push({
            type: "list",
            items: textInputs[`${element.type}_${index}`]
          });
          break;
        case "code":
          output.content.push({
            type: "code",
            language: "python",
            code: codeEditorRefs.current[index]?.getValue()
          });
          break;
        default:
          break;
      }
    });
    
    console.log(JSON.stringify(output, null, 2)); // Output the JSON string
  };

  const renderElement = (element, index) => {
    const handleDelete = () => {
      const updatedElements = [...elements];
      updatedElements.splice(index, 1);
      setElements(updatedElements);
    };
    switch (element.type) {
      case "text":
      case "list":
        return (
          <div key={index} className="form-group">
            <label>
              <span className="d-block mb-3">
                {" "}
                {index + 1}
                {"-"} {element.type.charAt(0).toUpperCase() + element.type.slice(1)}:
              </span>
            </label>
            <div className="nd row flex-wrap">
              <textarea
                className={`form-control overflow-scroll scrollable-content ${element.type}-form`}
                contentEditable="true"
                name={`${element.type}_${index}`}
                value={textInputs[`${element.type}_${index}`] || ""}
                onChange={(event) => handleInputChange(event, index)}
              />
              <span className="dlt-field" onClick={handleDelete}>
                Delete
              </span>
            </div>
          </div>
        );
      case "code":
        return (
          <div key={index} className="form-group">
            <label>
              <span className="d-block mb-3">
                {" "}
                {index + 1}
                {"-"} Code:
              </span>
            </label>
            <div className="nd row flex-wrap">
              <CodeEditor ref={(ref) => (codeEditorRefs.current[index] = ref)} />
              <span className="dlt-field" onClick={handleDelete}>
                Delete
              </span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-editor-window">
      <div className="lesson-editor">
        <div className="row justify-content-between flex-nowrap p-0 mb-4">
          <h3 className="h3nd" id="seTitle">
            Lesson Editor
          </h3>
        </div>
        <div
          className="forms overflow-scroll scrollable-content"
          style={{ maxHeight: formHeight }}
          ref={formRef}
        >
          <div className="form">
            <div className="form-group" id="lessonname-form">
              <label htmlFor="lessonname">Lesson Name:</label>
              <div className="nd row flex-wrap">
                <input
                  type="text"
                  className="form-control"
                  id="lessonname"
                  value={lessonName}
                  onChange={(e) => setLessonName(e.target.value)}
                />
              </div>
            </div>
            {elements.map((element, index) => renderElement(element, index))}
          </div>
        </div>
      </div>
      <div className="lesson-control">
        <div className="line"></div>
        <div></div>
        <div className="row justify-content-evenly p-0 mb-4">
          <button
            className="btn btn-outline-primary"
            onClick={() => addElement("text")}
          >
            Add Text
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => addElement("list")}
          >
            Add List
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => addElement("code")}
          >
            Add Code
          </button>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonEditor;
