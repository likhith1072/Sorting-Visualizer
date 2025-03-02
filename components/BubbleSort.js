export const BubbleSort = async (bars,setBars) => {
  if (!Array.isArray(bars) || bars.length === 0) {
    console.error("Bars array is empty or undefined");
    return;
  }
    let arr = [...bars]; // Copy state array
    const delay = (ms) => new Promise((res) => setTimeout(res, ms)); // Delay function

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        // Highlight comparing bars
        document.getElementById(`bar-${j}`).style.backgroundColor = "#ff6f61";
        document.getElementById(`bar-${j + 1}`).style.backgroundColor = "#ff6f61";

        await delay(500); // Animation delay

        if (arr[j] > arr[j + 1]) {
          // Swap values
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setBars([...arr]); // Update state
        }
         await delay(100);
        // Reset color
        document.getElementById(`bar-${j}`).style.backgroundColor = "#3B82F6";
        document.getElementById(`bar-${j + 1}`).style.backgroundColor = "#3B82F6";
        await delay(100);
      }
      // document.getElementById(`bar-${arr.length-1-i}`).style.backgroundColor = "red";
    }
    // document.getElementById(`bar-${0}`).style.backgroundColor = "red";
  };