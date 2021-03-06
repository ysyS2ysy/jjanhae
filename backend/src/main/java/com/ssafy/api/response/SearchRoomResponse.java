package com.ssafy.api.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@ApiModel("SearchRoomResponse")
public class SearchRoomResponse {
    Long roomSeq; // roomSeq
    int type; // 0:비공개, 1:공개
    //String password; 비밀번호 반환 안함
    int joinUserNum; // 참여인원수
    String ownerId; // 방장 ID
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    LocalDateTime startTime; // 시작시간
    String thumbnail; // 썸네일이미지url
    String title; // 방제
    String description; // 방설명
    int drinkLimit; // 주량
}
