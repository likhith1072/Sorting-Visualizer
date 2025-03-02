export const InsertionSort = async (bars, setBars) => {
    let arr = [...bars];
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
  
      document.getElementById(`bar-${i}`).style.backgroundColor = "#ff6f61";
  
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        setBars([...arr]);
        await delay(50);
      }
  
      arr[j + 1] = key;
      setBars([...arr]);
  
      document.getElementById(`bar-${i}`).style.backgroundColor = "#3B82F6";
    }
  };
  