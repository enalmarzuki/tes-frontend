import React, { useState } from "react";

import { Input } from "../../components/Input";
import Button from "../../components/Button";

export default function Kalkulator() {
  const [checked, setChecked] = useState(0);
  const [error, setError] = useState(false);
  const [inputText1, setInputText1] = useState(0);
  const [inputText2, setInputText2] = useState(0);
  const [inputText3, setInputText3] = useState(0);

  const handleOnChangeCheckBox = (e) => {
    let checkbox = e.target.checked;
    checkbox ? setChecked(checked + 1) : setChecked(checked - 1);
  };

  const btnHandleClick = (e) => {
    let hasil = 0;
    let newArray = [];
    let targetId = e.target.id;
    const checkBox = document.querySelectorAll("#cb-input");
    const textHasil = document.querySelector("#hasil");

    if (checked < 2) {
      return setError(true);
    }

    for (let i = 0; i < checkBox.length; i++) {
      setError(false);
      if (checkBox[i].checked) {
        newArray.push(parseInt(checkBox[i].value));
      }
    }

    if (targetId === "tambah")
      hasil = newArray.reduce((acc, cur) => acc + cur, 0);
    if (targetId === "kurang") hasil = newArray.reduce((acc, cur) => acc - cur);
    if (targetId === "kali") hasil = newArray.reduce((acc, cur) => acc * cur);
    if (targetId === "bagi") hasil = newArray.reduce((acc, cur) => acc / cur);

    textHasil.innerHTML = hasil || 0;
  };

  return (
    <section
      className="p-12 h-screen bg-gray-200 flex items-center"
      id="section-kalkulator"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4">
            <div className="bg-white pb-6">
              <p className="text-3xl text-white font-semibold bg-blue-500 p-4 mb-6">
                Kalkulator
              </p>

              <div className="flex items-center justify-evenly mt-3 px-4 ">
                <Input.InputText
                  name="input-1"
                  id="input-1"
                  placeholder="Ketikkan Angka"
                  type="number"
                  onChange={(e) => setInputText1(e.target.value)}
                />
                <Input.InputCheckbox
                  name="cb-input"
                  id="cb-input"
                  onChange={handleOnChangeCheckBox}
                  value={parseInt(inputText1) || 0}
                />
              </div>

              <div className="flex items-center justify-evenly mt-3 px-4 ">
                <Input.InputText
                  name="input-2"
                  id="input-2"
                  placeholder="Ketikkan Angka"
                  type="number"
                  onChange={(e) => setInputText2(e.target.value)}
                />
                <Input.InputCheckbox
                  name="cb-input"
                  id="cb-input"
                  onChange={handleOnChangeCheckBox}
                  value={parseInt(inputText2) || 0}
                />
              </div>

              <div className="flex items-center justify-evenly mt-3 px-4 ">
                <Input.InputText
                  name="input-3"
                  id="input-3"
                  placeholder="Ketikkan Angka"
                  type="number"
                  onChange={(e) => setInputText3(e.target.value)}
                />
                <Input.InputCheckbox
                  name="cb-input"
                  id="cb-input"
                  onChange={handleOnChangeCheckBox}
                  value={parseInt(inputText3) || 0}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4">
            <div className=" bg-white px-4 flex justify-between pb-6 ">
              <Button id="tambah" onClick={btnHandleClick}>
                +
              </Button>
              <Button id="kurang" onClick={btnHandleClick}>
                -
              </Button>
              <Button id="kali" onClick={btnHandleClick}>
                *
              </Button>
              <Button id="bagi" onClick={btnHandleClick}>
                /
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4">
            <div className=" bg-white px-4 pb-4">
              <hr className="border-t-4" />

              {error && (
                <p className="mt-4 capitalize text-red-600 font-semibold text-sm flex items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-8 w-8 mr-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  anda harus mencentang lebih dari satu untuk melakukan operasi
                  aritmatika
                </p>
              )}

              <div className="hasil pt-4 flex justify-between">
                <p className="text-2xl font-semibold w-full md:w-1/2">
                  Hasil :
                </p>
                <p className="text-4xl font-semibold truncate" id="hasil">
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
