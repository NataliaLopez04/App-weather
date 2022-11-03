/* import React, { useState } from "react";

const Input = () => {
  const [country, setCountry] = useState(" ");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ country });
    if (country === " " || !country) return;
  };

  return (
    <div className="inputGroup">
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setCountry(e.target.value)}
          type="text"
          placeholder="Ejemplo: Colombia"
          id="search"
          autoComplete="off"
        />
        <label htmlFor="search">
          <span className="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAkxJREFUaEPtmW1OA0EIhqcnU0+mnkw9mQazJFMGhpePWjdp/zRpdxgehhfY3cs4+edycv/HA+DeJ9h5As8HzOsExb99Hr99Hd9vXeAdAOTM0xiDnUV9IygCKsFUAGjjOdqo49p171mQDABF+qPi7WZtGCQK0Bl1iyMEEQHodp4ctVIQhkABup2n6PPelm0IAgG4hfPSuTSEB3AL5+fozzqwisPLGIP7yKIbD+C7udqQIxR9yyELwvRzB9AVfS9IMkYahKmHnfGu6EcBCEgLnmrHMt4VfSvfkcyUAVRPwQKgThudbVpHhKPbzz6QbkjQVx8L4J7pww5qWlgqkgYg04enxsjg5lUbJIXoGpkJKQDOPVQXGdFaQFowr9JI20xSz+JBIDoBZBotOkAA5LF5EHcHkAJGdDKnQCcA2d36o22GAFjNplL3LR2EAVzlTzvBHRMtO8p1M0CLBuQemZ4BzfpHM51vX/8NAAdhOyorM9ECrmnALV3iCDInwCbU8WCToikAT5gVgKjtJeDoMLfLWa8vePpFJ+LQMOe2cOFVBQIdKEPjtNZAvMpRgSDb3FusHhO6obGMRKuGlz7a/9rzotQtpXYKXtXYdegMDK9J3dTTYu2m4q8htqmLDF5WbnvpVC2vFEBPd/ArpsyTsyqA67zXRGTO7qqMtlkFAHI+CoAIlMsh6ST7DgF2PgOAQFSqjaerxTYiYsuhSuOSNkNRnxdXANjOaV/yaSfDbxzprSX3Efqen0bPOqmk2+/ajhMoO1Ex8ACoRK9j7elP4Aff3ZcxkrqwbwAAAABJRU5ErkJggg=="
              width="20"
            />
          </span>
          Pais
        </label>
        <button className="search" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Input;
 */