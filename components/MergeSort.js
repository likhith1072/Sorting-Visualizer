
export const MergeSort = async (bars, setBars) => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const merge = async (arr, l, m, r) => {
        let left = arr.slice(l, m + 1);
        let right = arr.slice(m + 1, r + 1);
        let i = 0, j = 0, k = l;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                if((i+l)!=k){
               document.getElementById(`bar-${k}`).style.backgroundColor = "#ff6f61";
                document.getElementById(`bar-${i+l}`).style.backgroundColor = "#ff6f61";
                await delay(1000);
                arr[k++] = left[i++];
                await delay(50)
                // Reset color
                document.getElementById(`bar-${k-1}`).style.backgroundColor = "#3B82F6";
                document.getElementById(`bar-${i+l-1}`).style.backgroundColor = "#3B82F6";
                }
                else{
                    k++;
                    i++;
                }
            }
             else {
                if((j+m+1)!=k){
                document.getElementById(`bar-${k}`).style.backgroundColor = "#ff6f61";
                document.getElementById(`bar-${j+m+1}`).style.backgroundColor = "#ff6f61";
                await delay(1000);
                arr[k++] = right[j++];
                await delay(50)
                // Reset color
                document.getElementById(`bar-${k-1}`).style.backgroundColor = "#3B82F6";
                document.getElementById(`bar-${j+m+1-1}`).style.backgroundColor = "#3B82F6";
                }
                else{
                    k++;
                    j++;}
            }
        }

        while (i < left.length) {
            document.getElementById(`bar-${k}`).style.backgroundColor = "#ff6f61";
            document.getElementById(`bar-${i+l}`).style.backgroundColor = "#ff6f61";
            await delay(1000);
            arr[k++] = left[i++];
            // Reset color
            document.getElementById(`bar-${k-1}`).style.backgroundColor = "#3B82F6";
            document.getElementById(`bar-${i+l-1}`).style.backgroundColor = "#3B82F6";
        }
        while (j < right.length) {
            if(k!=j+m+1){
            document.getElementById(`bar-${k}`).style.backgroundColor = "#ff6f61";
            document.getElementById(`bar-${j+m+1}`).style.backgroundColor = "#ff6f61";
            await delay(1000);
            arr[k++] = right[j++];
            // Reset color
            document.getElementById(`bar-${k-1}`).style.backgroundColor = "#3B82F6";
             document.getElementById(`bar-${j+m+1-1}`).style.backgroundColor = "#3B82F6";
            }
            else{
                k++;
                j++;
            }
            }


        await delay(1000);
        setBars([...arr]);
    };

    const mergeSortHelper = async (arr, l, r) => {
        if (l >= r) return;
        let m = Math.floor((l + r) / 2);
        await mergeSortHelper(arr, l, m);
        await mergeSortHelper(arr, m + 1, r);
        await merge(arr, l, m, r);
    };

    let arr = [...bars];
    await mergeSortHelper(arr, 0, arr.length - 1);
};
