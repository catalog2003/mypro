const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(
      ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        const wrappedOnPerfEntry = (metric) => {
          try {
            // Log the metric
            console.log(`Metric: ${metric.name}`, metric);

            // Call the original onPerfEntry function with the metric
            onPerfEntry(metric);

            // Optionally send the metric to an external monitoring service
            // Example: sendToAnalytics(metric);
          } catch (error) {
            console.error("Error handling performance metric:", error);
          }
        };

        getCLS(wrappedOnPerfEntry);
        getFID(wrappedOnPerfEntry);
        getFCP(wrappedOnPerfEntry);
        getLCP(wrappedOnPerfEntry);
        getTTFB(wrappedOnPerfEntry);
      }
    ).catch(error => {
      console.error("Error importing web-vitals:", error);
    });
  }
};

// Example function to send metrics to an analytics endpoint
// Uncomment and implement this function if needed
// const sendToAnalytics = (metric) => {
//   fetch('/analytics', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(metric)
//   }).catch(error => console.error("Error sending metric to analytics:", error));
// };

export default reportWebVitals;
