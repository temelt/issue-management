package com.temelt.issuemanagement.util;

/**
 * Created by temelt on 5.02.2019.
 */
public final class ApiPaths {

    private static final String BASE_PATH = "/api";

    public static final class IssueCtrl {
        public static final String CTRL = BASE_PATH + "/issue";
    }

    public static final class ProjectCtrl {
        public static final String CTRL = BASE_PATH + "/project";
    }
    public static final class UserCtrl {
        public static final String CTRL = BASE_PATH + "/users";
    }

}
