package media_library;

import java.io.PrintWriter;
import java.util.List;

public class MediaUtil {
    public void stampaReport(List<? extends Scaffale<? extends Support>> scaffali, PrintWriter pw) {
        for (Scaffale<? extends Support> scaffale : scaffali) {
            for (Support s : scaffale) {
                pw.println(s.toString());
            }
        }
    }
}