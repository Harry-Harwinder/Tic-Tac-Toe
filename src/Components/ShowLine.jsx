/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
export default function ShowLine({winner}) {
  return (
          <div>
        {winner && JSON.stringify(winner) === JSON.stringify([6, 7, 8]) ? (
          <p>
            <div
              style={{
                backgroundColor: "red",
                height: "1px",
                width: "260px",
                marginLeft: "525px",
                marginTop: "-64px",
              }}
            ></div>
          </p>
        ) : JSON.stringify(winner) === JSON.stringify([3, 4, 5]) ? (
          <p>
            <div
              style={{
                backgroundColor: "red",
                height: "1px",
                width: "260px",
                marginLeft: "525px",
                marginTop: "-166px",
              }}
            ></div>
          </p>
        ) : JSON.stringify(winner) === JSON.stringify([0, 1, 2]) ? (
            <p>
              <div
                style={{
                  backgroundColor: "red",
                  height: "1px",
                  width: "260px",
                  marginLeft: "525px",
                  marginTop: "-268px",
                }}
              ></div>
            </p>
          ) : JSON.stringify(winner) === JSON.stringify([0, 3, 6]) ? (
            <p>
              <div
                style={{
                  backgroundColor: "red",
                  height: "242px",
                  width: "1px",
                  marginLeft: "550px",
                  marginTop: "-286px",
                }}
              ></div>
            </p>
          ) : JSON.stringify(winner) === JSON.stringify([1, 4, 7]) ? (
            <p>
              <div
                style={{
                  backgroundColor: "red",
                  height: "242px",
                  width: "1px",
                  marginLeft: "652px",
                  marginTop: "-286px",
                }}
              ></div>
            </p>
          ) : JSON.stringify(winner) === JSON.stringify([2, 5, 8]) ? (
            <p>
              <div
                style={{
                  backgroundColor: "red",
                  height: "242px",
                  width: "1px",
                  marginLeft: "754px",
                  marginTop: "-286px",
                }}
              ></div>
            </p>
          ) : JSON.stringify(winner) === JSON.stringify([0, 4, 8]) ? (
            <p>
              <div
                style={{
                  backgroundColor: "red",
                  height: "370px",
                  width: "1px",
                  marginLeft: "786px",
                  marginTop: "-403px",
                  transform: "rotate(-45deg)",
                  transformOrigin: "0 100%",
                }}
              ></div>
            </p>
          ) : JSON.stringify(winner) === JSON.stringify([2, 4, 6]) ? (
            <p>
              <div
                style={{
                  backgroundColor: "red",
                  height: "370px",
                  width: "1px",
                  marginLeft: "520px",
                  marginTop: "-403px",
                  transform: "rotate(45deg)",
                  transformOrigin: "0 100%",
                }}
              ></div>
            </p>
          ): (
          ""
        )}
        {/* Other JSX elements */}
      </div>
  )
}
