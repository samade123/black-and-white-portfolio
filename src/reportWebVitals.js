const reportWebVitals = onPerfEntry => {
  console.debug("onPerf", "outside if-statement")
  if (onPerfEntry && onPerfEntry instanceof Function) {
    console.debug("onPerf", "inside if-statement")
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      console.debug("onPerf", "inside if-statement", 'inside import staetment')
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;