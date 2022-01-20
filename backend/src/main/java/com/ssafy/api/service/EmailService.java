package com.ssafy.api.service;

import com.ssafy.api.request.FindIdRequest;
import com.ssafy.api.request.FindPwdRequest;

public interface EmailService {
    String sendSimpleMessage(FindIdRequest findIdRequest) throws Exception;
    void sendSimpleMessageButton(FindPwdRequest findPwdRequest) throws Exception;
}
