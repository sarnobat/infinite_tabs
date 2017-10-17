This is a chrome extension that makes an Ajax call to a java server.
```
+---------------+     +----------------------+  message   +-------------------+  AJAX via jQuery   +-------------+
| manifest.json | --> | background_script.js | ---------> | content_script.js | -----------------> | Server.java |
+---------------+     +----------------------+            +-------------------+                    +-------------+
```
