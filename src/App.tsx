import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  GridComponent,
  Inject,
  Toolbar,
  ExcelExport,
  PdfExport,
  ColumnModel,
} from "@syncfusion/ej2-react-grids";
import { ClickEventArgs } from "@syncfusion/ej2-navigations";

// prettier-ignore
const columns: ColumnModel[] = [
    { field: "id", type: "string", textAlign: "Left", },
    { field: "road_id", type: "number", textAlign: "Right", },
    { field: "carrway_start_m", type: "number", textAlign: "Right", },
    { field: "added_on", type: "date", textAlign: "Left", format: "d/M/y", },
    // { field: "added_on", type: "string", textAlign: "Left" },
  ];

// prettier-ignore
const data = [ 
     { id: "2072523d", road_id: 1109, carrway_start_m: 3777, added_on: "1994-08-25T00:00:00", },
     { id: "db91dc18", road_id: 1113, carrway_start_m: 3777, added_on: "1994-08-25T00:00:00", },
     { id: "98bebd32", road_id: 1837, carrway_start_m: 0, added_on: "1994-07-16T00:00:00", }, 
  ];

function App() {
  let grid: GridComponent | null;

  const toolbarClick = (args?: ClickEventArgs) => {
    if (args?.item?.id?.includes("excelexport")) {
      grid?.excelExport();
    }
    if (args?.item?.id?.includes("pdfexport")) {
      grid?.pdfExport();
    }
    if (args?.item?.id?.includes("csvexport")) {
      grid?.csvExport();
    }
  };

  return (
    <div>
      <GridComponent
        dataSource={data}
        ref={(g) => (grid = g)}
        groupSettings={{ enableLazyLoading: true }}
        toolbar={["PdfExport", "CsvExport", "ExcelExport"]}
        allowPdfExport={true}
        allowExcelExport={true}
        columns={columns}
        filterSettings={{ type: "Excel" }}
        toolbarClick={toolbarClick}
      >
        <Inject services={[Toolbar, ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
  );
}

export default App;
