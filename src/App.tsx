import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Filter,
  GridComponent,
  Group,
  Inject,
  Sort,
  Resize,
  Page,
  Reorder,
  ColumnChooser,
  Toolbar,
  ExcelExport,
  PdfExport,
  LazyLoadGroup,
  toolbarClick,
  ColumnModel,
} from "@syncfusion/ej2-react-grids";
import { ClickEventArgs } from "@syncfusion/ej2-navigations";

function App() {
  let grid: GridComponent | null;

  const columns: ColumnModel[] = [
    {
      field: "id",
      type: "string",
      textAlign: "Left",
    },
    {
      field: "road_id",
      type: "number",
      textAlign: "Right",
    },
    {
      field: "carrway_start_m",
      type: "number",
      textAlign: "Right",
    },
    {
      field: "added_on",
      type: "date",
      textAlign: "Left",
      format: "d/M/y",
    },
  ];

  const data = [
    {
      id: "2072523d-5683-422e-9bb1-5132fcb64d6d",
      road_id: 1003,
      carrway_start_m: 3777,
      added_on: "1994-08-25T00:00:00",
    },
    {
      id: "db91dc18-818e-4f96-974b-47bade112be6",
      road_id: 1003,
      carrway_start_m: 3777,
      added_on: "1994-08-25T00:00:00",
    },
    {
      id: "98bebd32-cb1e-4dcc-a46a-5dff60ef9590",
      road_id: 1467,
      carrway_start_m: 0,
      added_on: "1994-07-16T00:00:00",
    },
  ];

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
        pageSettings={{ pageSize: 50 }}
        groupSettings={{ enableLazyLoading: true }}
        allowResizing={true}
        allowGrouping={true}
        allowFiltering={true}
        allowPaging={true}
        allowReordering={true}
        showColumnChooser={true}
        toolbar={["ColumnChooser", "ExcelExport", "PdfExport", "CsvExport"]}
        allowExcelExport={true}
        allowPdfExport={true}
        allowSorting={true}
        columns={columns}
        filterSettings={{ type: "Excel" }}
        toolbarClick={toolbarClick}
      >
        <Inject
          services={[
            Sort,
            Filter,
            Group,
            Resize,
            Page,
            Reorder,
            ColumnChooser,
            Toolbar,
            ExcelExport,
            PdfExport,
            LazyLoadGroup,
          ]}
        />
      </GridComponent>
    </div>
  );
}

export default App;
