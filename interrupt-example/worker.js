import coincident from "../window.js";
import { loadPyodide } from "https://unpkg.com/pyodide@0.24.0/pyodide.mjs";

function stringify(obj) {
  if (ArrayBuffer.isView(obj)) {
    return obj;
  }
  return JSON.stringify(obj);
}
const ib = new Int32Array(new SharedArrayBuffer(4));
const until = coincident(self, { stringify, parse: JSON.parse }).proxy;
until.setInterruptBuffer(ib);

const py = await loadPyodide();
py.setStdin({ stdin: () => until.input("stdin??") });
py.setStdout({
  write(buf) {
    until.output(buf);
    return buf.length;
  },
});
py.setInterruptBuffer(ib);
coincident.setInterruptHandler(() => {
  py.checkInterrupt();
});

py.runPython(String.raw`
import time
while True:
    try:
        res = input("called input ")
        print("got ", res)
        for i in range(10):
            time.sleep(0.1)
            print(i)
    except KeyboardInterrupt:
        print("keyboard interrupted, starting over!")
`);
