package org.forkjoin.apikit.info;


import org.forkjoin.apikit.AnalyseException;
import org.forkjoin.apikit.core.Account;
import org.forkjoin.apikit.core.ActionType;

import java.util.ArrayList;
import java.util.List;

/**
 * @author zuoge85 on 15/6/12.
 */
public class ApiMethodInfo {
    private int index;
    private String name;
    private String url;
    private ActionType type = ActionType.GET;
    private boolean account = true;
    /**
     * 账户对象名称
     */
    private String accountParam = Account.PARAM_NAME;


    //    private boolean isPathVariable = false;
//    private boolean isFormParam = false;
    private ArrayList<ApiMethodParamInfo> params = new ArrayList<>();
    private ArrayList<ApiMethodParamInfo> pathParams = new ArrayList<>();
    private ArrayList<ApiMethodParamInfo> formParams = new ArrayList<>();

    private TypeInfo resultType;
    private JavadocInfo comment;

    private List<AnnotationInfo> annotations = new ArrayList<>();
    private String file;

    public ApiMethodInfo() {
    }

    public void addParam(ApiMethodParamInfo param) {
        params.add(param);
        if (param.isPathVariable()) {
            pathParams.add(param);
        }
        if (param.isFormParam()) {
            formParams.add(param);
        }
        if(formParams.size()>1){
            throw new AnalyseException("分析错误！暂时只支持单表单");
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public ActionType getType() {
        return type;
    }

    public void setType(ActionType type) {
        this.type = type;
    }

    public TypeInfo getResultType() {
        return resultType;
    }

    public void setResultType(TypeInfo resultType) {
        this.resultType = resultType;
    }

    public void addAnnotation(AnnotationInfo annotation) {
        annotations.add(annotation);
    }

    public List<AnnotationInfo> getAnnotations() {
        return annotations;
    }

    public boolean isAccount() {
        return account;
    }

    public void setAccount(boolean account) {
        this.account = account;
    }

    public void setComment(JavadocInfo comment) {
        this.comment = comment;
    }

    public JavadocInfo getComment() {
        return comment;
    }

    /**
     * 账户对象名称
     */
    public void setAccountParam(String accountParam) {
        this.accountParam = accountParam;
    }


    /**
     * 账户对象名称
     */
    public String getAccountParam() {
        return accountParam;
    }

    public ArrayList<ApiMethodParamInfo> getParams() {
        return params;
    }


    //    public String getId() {
//        return id;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }


    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public ArrayList<ApiMethodParamInfo> getFormParams() {
        return formParams;
    }

    public ArrayList<ApiMethodParamInfo> getPathParams() {
        return pathParams;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    @Override
    public String toString() {
        return "ApiMethodInfo{" +
                "index=" + index +
                ", name='" + name + '\'' +
                ", url='" + url + '\'' +
                ", type=" + type +
                ", account=" + account +
                ", accountParam='" + accountParam + '\'' +
                ", params=" + params +
                ", pathParams=" + pathParams +
                ", formParams=" + formParams +
                ", resultType=" + resultType +
                ", comment=" + comment +
                ", annotations=" + annotations +
                ", file='" + file + '\'' +
                '}';
    }
}