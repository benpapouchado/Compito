package backend.delete;

import java.util.List;

public class DeleteRows {

    public static String processDeleteQuery(List<Integer> idList){
        StringBuilder query = new StringBuilder("DELETE FROM TASK t WHERE ID IN (");

        for (int i = 0; i < idList.size() - 1; i++) {
            query.append(idList.get(i) + ", ");
        }
        query.append(idList.get(idList.size() -1) + " )");
        return query.toString(); 
    }
}
