import { ref, watch } from "vue";
//從config 拿功能狀態定義物件
import { programStatus } from "@/configs";

/**
 * 其他
 */
//選擇的物件
const selectedItem = ref({});
const search = ref({});
const unselectedItems = ref({
    filterEnrEnrollType: [],
});

/**
 * 資料操作狀態管理
 */
const defaultProgramState = () => {
    return {
        status: programStatus.create.code,
        statusName: programStatus.create.name,
    };
};
const programState = ref(defaultProgramState());

//變更程式資料操作狀態
const changeProgramStatus = (statusCode = "") => {
    const statusObject = programStatus.getTargetStatusObject(statusCode);
    console.log(statusObject);
    programState.value.status = statusObject.code;
    programState.value.statusName = statusObject.name;
};

export { selectedItem, search, unselectedItems, programState, changeProgramStatus};