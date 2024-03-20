/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IError, QueryFilterRequest, RemoveReply } from "../../core/common";
import { FileEntity } from "../drive/index";
import { GeoProvinceEntity } from "../geo/index";
import { UserEntity } from "../workspaces/index";

export const protobufPackage = "";

export interface AcSectionCreateReply {
  data: AcSectionEntity | undefined;
  error: IError | undefined;
}

export interface AcSectionReply {
  data: AcSectionEntity | undefined;
  error: IError | undefined;
}

export interface AcSectionQueryReply {
  items: AcSectionEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface AcSectionEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"format"  ) */
  format?: string | undefined;
  /** @tag(  yaml:"title"  ) */
  title?: string | undefined;
  /** @tag(  yaml:"header" gorm:"text" ) */
  header?: string | undefined;
  /** @tag( yaml:"headerExcerpt" gorm:"text" ) */
  headerExcerpt?: string | undefined;
  /** @tag(  yaml:"uniqueGroupIdentifier"  ) */
  uniqueGroupIdentifier?: string | undefined;
  /** Many 2 many entities */
  attachmentsListId: string[];
  /** @tag(gorm:"many2many:acSection_attachments;foreignKey:UniqueId;references:UniqueId" yaml:"attachments" fbtype:"many2many") */
  attachments: FileEntity[];
  /** Many 2 many entities */
  tasksListId: string[];
  /** @tag(gorm:"many2many:acSection_tasks;foreignKey:UniqueId;references:UniqueId" yaml:"tasks" fbtype:"many2many") */
  tasks: AcTaskEntity[];
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface AcTaskCreateReply {
  data: AcTaskEntity | undefined;
  error: IError | undefined;
}

export interface AcTaskReply {
  data: AcTaskEntity | undefined;
  error: IError | undefined;
}

export interface AcTaskQueryReply {
  items: AcTaskEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface AcTaskEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"format"  ) */
  format?: string | undefined;
  /** @tag(  yaml:"title"  ) */
  title?: string | undefined;
  /** @tag(  yaml:"content" gorm:"text" ) */
  content?: string | undefined;
  /** @tag( yaml:"contentExcerpt" gorm:"text" ) */
  contentExcerpt?: string | undefined;
  /** @tag(  yaml:"instruction"  ) */
  instruction?: string | undefined;
  /** Many 2 many entities */
  questionsListId: string[];
  /** @tag(gorm:"many2many:acTask_questions;foreignKey:UniqueId;references:UniqueId" yaml:"questions" fbtype:"many2many") */
  questions: QuestionEntity[];
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface ClassRoomCreateReply {
  data: ClassRoomEntity | undefined;
  error: IError | undefined;
}

export interface ClassRoomReply {
  data: ClassRoomEntity | undefined;
  error: IError | undefined;
}

export interface ClassRoomQueryReply {
  items: ClassRoomEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ClassRoomEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"title"  ) */
  title?: string | undefined;
  /** @tag(  yaml:"description" gorm:"text" ) */
  description?: string | undefined;
  /** @tag( yaml:"descriptionExcerpt" gorm:"text" ) */
  descriptionExcerpt?: string | undefined;
  /** @tag(  yaml:"accessLevel"  ) */
  accessLevel?: string | undefined;
  /** @tag(  yaml:"provider"  ) */
  provider?: string | undefined;
  /** Many 2 many entities */
  membersListId: string[];
  /** @tag(gorm:"many2many:classRoom_members;foreignKey:UniqueId;references:UniqueId" yaml:"members" fbtype:"many2many") */
  members: UserEntity[];
  /** @tag(  yaml:"meetUrl"  ) */
  meetUrl?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface CourseCreateReply {
  data: CourseEntity | undefined;
  error: IError | undefined;
}

export interface CourseReply {
  data: CourseEntity | undefined;
  error: IError | undefined;
}

export interface CourseQueryReply {
  items: CourseEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface CourseEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"introVideoUrl"  ) */
  introVideoUrl?: string | undefined;
  /** Many 2 many entities */
  attachmentsListId: string[];
  /** @tag(gorm:"many2many:course_attachments;foreignKey:UniqueId;references:UniqueId" yaml:"attachments" fbtype:"many2many") */
  attachments: FileEntity[];
  /** @tag(  yaml:"images"  ) */
  images?: string | undefined;
  /** @tag(  yaml:"title"  ) */
  title?: string | undefined;
  /** @tag(  yaml:"description" gorm:"text" ) */
  description?: string | undefined;
  /** @tag( yaml:"descriptionExcerpt" gorm:"text" ) */
  descriptionExcerpt?: string | undefined;
  /** @tag(  yaml:"excerpt" gorm:"text" ) */
  excerpt?: string | undefined;
  /** @tag( yaml:"excerptExcerpt" gorm:"text" ) */
  excerptExcerpt?: string | undefined;
  /** @tag(  yaml:"duration"  ) */
  duration?: number | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface CourseEnrollmentCreateReply {
  data: CourseEnrollmentEntity | undefined;
  error: IError | undefined;
}

export interface CourseEnrollmentReply {
  data: CourseEnrollmentEntity | undefined;
  error: IError | undefined;
}

export interface CourseEnrollmentQueryReply {
  items: CourseEnrollmentEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface CourseEnrollmentEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  courseId?: string | undefined;
  /** @tag(gorm:"foreignKey:CourseId;references:UniqueId" json:"course" yaml:"course" fbtype:"one") */
  course: CourseEntity | undefined;
  /** repeated CourseEnrollmentUnitProgressEntity unitProgresses = 11; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"unitProgresses") */
  unitProgresses: CourseEnrollmentUnitProgressEntity[];
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface CourseEnrollmentUnitProgressEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  unitId?: string | undefined;
  /** @tag(gorm:"foreignKey:UnitId;references:UniqueId" json:"unit" yaml:"unit" fbtype:"one") */
  unit: UnitEntity | undefined;
  /** @tag(  yaml:"progress"  ) */
  progress?: number | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface ExamCreateReply {
  data: ExamEntity | undefined;
  error: IError | undefined;
}

export interface ExamReply {
  data: ExamEntity | undefined;
  error: IError | undefined;
}

export interface ExamQueryReply {
  items: ExamEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ExamEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"format"  ) */
  format?: string | undefined;
  /** @tag(  yaml:"title" gorm:"text" ) */
  title?: string | undefined;
  /** @tag( yaml:"titleExcerpt" gorm:"text" ) */
  titleExcerpt?: string | undefined;
  /** @tag(  yaml:"revision"  ) */
  revision?: number | undefined;
  /** @tag(  yaml:"description" gorm:"text" ) */
  description?: string | undefined;
  /** @tag( yaml:"descriptionExcerpt" gorm:"text" ) */
  descriptionExcerpt?: string | undefined;
  /** Many 2 many entities */
  sectionsListId: string[];
  /** @tag(gorm:"many2many:exam_sections;foreignKey:UniqueId;references:UniqueId" yaml:"sections" fbtype:"many2many") */
  sections: AcSectionEntity[];
  /** Many 2 many entities */
  attachmentsListId: string[];
  /** @tag(gorm:"many2many:exam_attachments;foreignKey:UniqueId;references:UniqueId" yaml:"attachments" fbtype:"many2many") */
  attachments: FileEntity[];
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface ExamSessionCreateReply {
  data: ExamSessionEntity | undefined;
  error: IError | undefined;
}

export interface ExamSessionReply {
  data: ExamSessionEntity | undefined;
  error: IError | undefined;
}

export interface ExamSessionQueryReply {
  items: ExamSessionEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ExamSessionEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  sourceExamId?: string | undefined;
  /** @tag(gorm:"foreignKey:SourceExamId;references:UniqueId" json:"sourceExam" yaml:"sourceExam" fbtype:"one") */
  sourceExam: ExamEntity | undefined;
  /** repeated ExamSessionResultEntity results = 11; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"results") */
  results: ExamSessionResultEntity[];
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface ExamSessionResultEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  questionId?: string | undefined;
  /** @tag(gorm:"foreignKey:QuestionId;references:UniqueId" json:"question" yaml:"question" fbtype:"one") */
  question: QuestionEntity | undefined;
  /** repeated ExamSessionResultChoicesEntity choices = 11; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"choices") */
  choices: ExamSessionResultChoicesEntity[];
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface ExamSessionResultChoicesEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"content" gorm:"text" ) */
  content?: string | undefined;
  /** @tag( yaml:"contentExcerpt" gorm:"text" ) */
  contentExcerpt?: string | undefined;
  /** One 2 one to external entity */
  choiceId?: string | undefined;
  /** @tag(gorm:"foreignKey:ChoiceId;references:UniqueId" json:"choice" yaml:"choice" fbtype:"one") */
  choice: QuestionChoicesEntity | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface ExamSessionProgressDto {
  /** @tag(yaml:"examSessionId") */
  examSessionId?: string | undefined;
  /** @tag(gorm:"foreignKey:ExamSessionId;references:UniqueId" json:"examSession" yaml:"examSession") */
  examSession: ExamSessionEntity | undefined;
  progressPercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  remainingQuestions: number;
  examTotalQuestions: number;
  userFilledQuestions: number;
}

export interface ExamSessionStatQueryResult {
  /** @tag(gorm:"items_count") */
  itemsCount: number;
  /** @tag(gorm:"section_unique_id") */
  sectionUniqueId: string;
  /** @tag(gorm:"session_unique_id") */
  sessionUniqueId: string;
  /** @tag(gorm:"exam_unique_id") */
  examUniqueId: string;
  /** @tag(gorm:"exam_title") */
  examTitle: string;
  /** @tag(gorm:"section_title") */
  sectionTitle: string;
  /** @tag(gorm:"stat_group") */
  statGroup: string;
  /** @tag(gorm:"unique_group_identifier") */
  uniqueGroupIdentifier: string;
}

export interface CommonCEFRSectionProgressDto {
  /** @tag(json:"listenningTotalQuestions") */
  listenningTotalQuestions: number;
  /** @tag(json:"listenningAnsweredQuestions") */
  listenningAnsweredQuestions: number;
  /** @tag(json:"grammarTotalQuestions") */
  grammarTotalQuestions: number;
  /** @tag(json:"grammarAnsweredQuestions") */
  grammarAnsweredQuestions: number;
  /** @tag(json:"writingTotalQuestions") */
  writingTotalQuestions: number;
  /** @tag(json:"writingAnsweredQuestions") */
  writingAnsweredQuestions: number;
  /** @tag(json:"readingTotalQuestions") */
  readingTotalQuestions: number;
  /** @tag(json:"readingAnsweredQuestions") */
  readingAnsweredQuestions: number;
  /** @tag(json:"speakingTotalQuestions") */
  speakingTotalQuestions: number;
  /** @tag(json:"speakingAnsweredQuestions") */
  speakingAnsweredQuestions: number;
  listeningProgress: number;
  grammarProgress: number;
  writingProgress: number;
  readingProgress: number;
  speakingProgress: number;
  examUniqueId: string;
  listeningProgressString: string;
  grammarProgressString: string;
  writingProgressString: string;
  readingProgressString: string;
  speakingProgressString: string;
  sessionUniqueId: string;
  examTitle: string;
}

export interface ExamSessionReviewCreateReply {
  data: ExamSessionReviewEntity | undefined;
  error: IError | undefined;
}

export interface ExamSessionReviewReply {
  data: ExamSessionReviewEntity | undefined;
  error: IError | undefined;
}

export interface ExamSessionReviewQueryReply {
  items: ExamSessionReviewEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ExamSessionReviewEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  choiceId?: string | undefined;
  /** @tag(gorm:"foreignKey:ChoiceId;references:UniqueId" json:"choice" yaml:"choice" fbtype:"one") */
  choice: ExamSessionResultChoicesEntity | undefined;
  /** @tag( validate:"required" yaml:"accepted"  ) */
  accepted?: number | undefined;
  /** One 2 one to external entity */
  sessionId?: string | undefined;
  /** @tag(gorm:"foreignKey:SessionId;references:UniqueId" json:"session" yaml:"session" fbtype:"one") */
  session: ExamSessionEntity | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface QuestionBankCreateReply {
  data: QuestionBankEntity | undefined;
  error: IError | undefined;
}

export interface QuestionBankReply {
  data: QuestionBankEntity | undefined;
  error: IError | undefined;
}

export interface QuestionBankQueryReply {
  items: QuestionBankEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface QuestionBankEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: QuestionBankEntityPolyglot[];
  /** @tag(translate:"true" validate:"required,omitempty,min=1" yaml:"title"  ) */
  title?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface QuestionBankEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"title" json:"title"); */
  title: string;
}

export interface QuestionCreateReply {
  data: QuestionEntity | undefined;
  error: IError | undefined;
}

export interface QuestionReply {
  data: QuestionEntity | undefined;
  error: IError | undefined;
}

export interface QuestionQueryReply {
  items: QuestionEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface QuestionEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  bankId?: string | undefined;
  /** @tag(gorm:"foreignKey:BankId;references:UniqueId" json:"bank" yaml:"bank" fbtype:"one") */
  bank: QuestionBankEntity | undefined;
  /** @tag(  yaml:"wordCount"  ) */
  wordCount?: number | undefined;
  /** @tag(  yaml:"isPreview"  ) */
  isPreview?: number | undefined;
  /** @tag(  yaml:"durationInSeconds"  ) */
  durationInSeconds?: number | undefined;
  /** @tag(  yaml:"isCorrect"  ) */
  isCorrect?: number | undefined;
  /** @tag(  yaml:"title" gorm:"text" ) */
  title?: string | undefined;
  /** @tag( yaml:"titleExcerpt" gorm:"text" ) */
  titleExcerpt?: string | undefined;
  /** @tag(  yaml:"body" gorm:"text" ) */
  body?: string | undefined;
  /** @tag( yaml:"bodyExcerpt" gorm:"text" ) */
  bodyExcerpt?: string | undefined;
  /** Many 2 many entities */
  provincesListId: string[];
  /** @tag(gorm:"many2many:question_provinces;foreignKey:UniqueId;references:UniqueId" yaml:"provinces" fbtype:"many2many") */
  provinces: GeoProvinceEntity[];
  /** One 2 one to external entity */
  questionLevelId?: string | undefined;
  /** @tag(gorm:"foreignKey:QuestionLevelId;references:UniqueId" json:"questionLevel" yaml:"questionLevel" fbtype:"one") */
  questionLevel: QuestionLevelEntity | undefined;
  /** One 2 one to external entity */
  studyYearId?: string | undefined;
  /** @tag(gorm:"foreignKey:StudyYearId;references:UniqueId" json:"studyYear" yaml:"studyYear" fbtype:"one") */
  studyYear: StudyYearEntity | undefined;
  /** One 2 one to external entity */
  schoolTypeId?: string | undefined;
  /** @tag(gorm:"foreignKey:SchoolTypeId;references:UniqueId" json:"schoolType" yaml:"schoolType" fbtype:"one") */
  schoolType: SchoolTypeEntity | undefined;
  /** One 2 one to external entity */
  questionSemesterId?: string | undefined;
  /** @tag(gorm:"foreignKey:QuestionSemesterId;references:UniqueId" json:"questionSemester" yaml:"questionSemester" fbtype:"one") */
  questionSemester: QuestionSemesterEntity | undefined;
  /** One 2 one to external entity */
  questionDifficulityLevelId?: string | undefined;
  /** @tag(gorm:"foreignKey:QuestionDifficulityLevelId;references:UniqueId" json:"questionDifficulityLevel" yaml:"questionDifficulityLevel" fbtype:"one") */
  questionDifficulityLevel: QuestionDifficulityLevelEntity | undefined;
  /** repeated QuestionChoicesEntity choices = 37; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"choices") */
  choices: QuestionChoicesEntity[];
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface QuestionChoicesEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"content" gorm:"text" ) */
  content?: string | undefined;
  /** @tag( yaml:"contentExcerpt" gorm:"text" ) */
  contentExcerpt?: string | undefined;
  /** @tag(  yaml:"correctAnswer"  ) */
  correctAnswer?: string | undefined;
  /** @tag(  yaml:"isCorrect"  ) */
  isCorrect?: number | undefined;
  /** @tag(  yaml:"isPreview"  ) */
  isPreview?: number | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface QuestionDifficulityLevelCreateReply {
  data: QuestionDifficulityLevelEntity | undefined;
  error: IError | undefined;
}

export interface QuestionDifficulityLevelReply {
  data: QuestionDifficulityLevelEntity | undefined;
  error: IError | undefined;
}

export interface QuestionDifficulityLevelQueryReply {
  items: QuestionDifficulityLevelEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface QuestionDifficulityLevelEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: QuestionDifficulityLevelEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface QuestionDifficulityLevelEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface QuestionLevelCreateReply {
  data: QuestionLevelEntity | undefined;
  error: IError | undefined;
}

export interface QuestionLevelReply {
  data: QuestionLevelEntity | undefined;
  error: IError | undefined;
}

export interface QuestionLevelQueryReply {
  items: QuestionLevelEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface QuestionLevelEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: QuestionLevelEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface QuestionLevelEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface QuestionSemesterCreateReply {
  data: QuestionSemesterEntity | undefined;
  error: IError | undefined;
}

export interface QuestionSemesterReply {
  data: QuestionSemesterEntity | undefined;
  error: IError | undefined;
}

export interface QuestionSemesterQueryReply {
  items: QuestionSemesterEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface QuestionSemesterEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: QuestionSemesterEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface QuestionSemesterEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface QuizCreateReply {
  data: QuizEntity | undefined;
  error: IError | undefined;
}

export interface QuizReply {
  data: QuizEntity | undefined;
  error: IError | undefined;
}

export interface QuizQueryReply {
  items: QuizEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface QuizEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"title"  ) */
  title?: string | undefined;
  /** @tag(  yaml:"description" gorm:"text" ) */
  description?: string | undefined;
  /** @tag( yaml:"descriptionExcerpt" gorm:"text" ) */
  descriptionExcerpt?: string | undefined;
  /** Many 2 many entities */
  questionsListId: string[];
  /** @tag(gorm:"many2many:quiz_questions;foreignKey:UniqueId;references:UniqueId" yaml:"questions" fbtype:"many2many") */
  questions: QuestionEntity[];
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface SchoolTypeCreateReply {
  data: SchoolTypeEntity | undefined;
  error: IError | undefined;
}

export interface SchoolTypeReply {
  data: SchoolTypeEntity | undefined;
  error: IError | undefined;
}

export interface SchoolTypeQueryReply {
  items: SchoolTypeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface SchoolTypeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: SchoolTypeEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface SchoolTypeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface StudyYearCreateReply {
  data: StudyYearEntity | undefined;
  error: IError | undefined;
}

export interface StudyYearReply {
  data: StudyYearEntity | undefined;
  error: IError | undefined;
}

export interface StudyYearQueryReply {
  items: StudyYearEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface StudyYearEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: StudyYearEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface StudyYearEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface UnitCreateReply {
  data: UnitEntity | undefined;
  error: IError | undefined;
}

export interface UnitReply {
  data: UnitEntity | undefined;
  error: IError | undefined;
}

export interface UnitQueryReply {
  items: UnitEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface UnitEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  courseId?: string | undefined;
  /** @tag(gorm:"foreignKey:CourseId;references:UniqueId" json:"course" yaml:"course" fbtype:"one") */
  course: CourseEntity | undefined;
  /** @tag(  yaml:"title"  ) */
  title?: string | undefined;
  /** @tag(  yaml:"content" gorm:"text" ) */
  content?: string | undefined;
  /** @tag( yaml:"contentExcerpt" gorm:"text" ) */
  contentExcerpt?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface HierarchyRecord {
  linkerId: string;
  uniqueId: string;
}

export interface HierarchyUpdateDto {
  records: HierarchyRecord[];
}

function createBaseAcSectionCreateReply(): AcSectionCreateReply {
  return { data: undefined, error: undefined };
}

export const AcSectionCreateReply = {
  encode(
    message: AcSectionCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcSectionEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AcSectionCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcSectionCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcSectionEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcSectionCreateReply {
    return {
      data: isSet(object.data)
        ? AcSectionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcSectionCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcSectionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcSectionCreateReply>, I>>(
    base?: I
  ): AcSectionCreateReply {
    return AcSectionCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcSectionCreateReply>, I>>(
    object: I
  ): AcSectionCreateReply {
    const message = createBaseAcSectionCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcSectionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcSectionReply(): AcSectionReply {
  return { data: undefined, error: undefined };
}

export const AcSectionReply = {
  encode(
    message: AcSectionReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcSectionEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcSectionReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcSectionReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcSectionEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcSectionReply {
    return {
      data: isSet(object.data)
        ? AcSectionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcSectionReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcSectionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcSectionReply>, I>>(
    base?: I
  ): AcSectionReply {
    return AcSectionReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcSectionReply>, I>>(
    object: I
  ): AcSectionReply {
    const message = createBaseAcSectionReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcSectionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcSectionQueryReply(): AcSectionQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const AcSectionQueryReply = {
  encode(
    message: AcSectionQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AcSectionEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcSectionQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcSectionQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(AcSectionEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcSectionQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AcSectionEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcSectionQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AcSectionEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcSectionQueryReply>, I>>(
    base?: I
  ): AcSectionQueryReply {
    return AcSectionQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcSectionQueryReply>, I>>(
    object: I
  ): AcSectionQueryReply {
    const message = createBaseAcSectionQueryReply();
    message.items =
      object.items?.map((e) => AcSectionEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcSectionEntity(): AcSectionEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    format: undefined,
    title: undefined,
    header: undefined,
    headerExcerpt: undefined,
    uniqueGroupIdentifier: undefined,
    attachmentsListId: [],
    attachments: [],
    tasksListId: [],
    tasks: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const AcSectionEntity = {
  encode(
    message: AcSectionEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.format !== undefined) {
      writer.uint32(66).string(message.format);
    }
    if (message.title !== undefined) {
      writer.uint32(74).string(message.title);
    }
    if (message.header !== undefined) {
      writer.uint32(82).string(message.header);
    }
    if (message.headerExcerpt !== undefined) {
      writer.uint32(90).string(message.headerExcerpt);
    }
    if (message.uniqueGroupIdentifier !== undefined) {
      writer.uint32(98).string(message.uniqueGroupIdentifier);
    }
    for (const v of message.attachmentsListId) {
      writer.uint32(114).string(v!);
    }
    for (const v of message.attachments) {
      FileEntity.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.tasksListId) {
      writer.uint32(138).string(v!);
    }
    for (const v of message.tasks) {
      AcTaskEntity.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(152).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(160).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(168).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(178).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(186).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcSectionEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcSectionEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.format = reader.string();
          break;
        case 9:
          message.title = reader.string();
          break;
        case 10:
          message.header = reader.string();
          break;
        case 11:
          message.headerExcerpt = reader.string();
          break;
        case 12:
          message.uniqueGroupIdentifier = reader.string();
          break;
        case 14:
          message.attachmentsListId.push(reader.string());
          break;
        case 15:
          message.attachments.push(FileEntity.decode(reader, reader.uint32()));
          break;
        case 17:
          message.tasksListId.push(reader.string());
          break;
        case 18:
          message.tasks.push(AcTaskEntity.decode(reader, reader.uint32()));
          break;
        case 19:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.createdFormatted = reader.string();
          break;
        case 23:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcSectionEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      format: isSet(object.format) ? String(object.format) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      header: isSet(object.header) ? String(object.header) : undefined,
      headerExcerpt: isSet(object.headerExcerpt)
        ? String(object.headerExcerpt)
        : undefined,
      uniqueGroupIdentifier: isSet(object.uniqueGroupIdentifier)
        ? String(object.uniqueGroupIdentifier)
        : undefined,
      attachmentsListId: Array.isArray(object?.attachmentsListId)
        ? object.attachmentsListId.map((e: any) => String(e))
        : [],
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => FileEntity.fromJSON(e))
        : [],
      tasksListId: Array.isArray(object?.tasksListId)
        ? object.tasksListId.map((e: any) => String(e))
        : [],
      tasks: Array.isArray(object?.tasks)
        ? object.tasks.map((e: any) => AcTaskEntity.fromJSON(e))
        : [],
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: AcSectionEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.format !== undefined && (obj.format = message.format);
    message.title !== undefined && (obj.title = message.title);
    message.header !== undefined && (obj.header = message.header);
    message.headerExcerpt !== undefined &&
      (obj.headerExcerpt = message.headerExcerpt);
    message.uniqueGroupIdentifier !== undefined &&
      (obj.uniqueGroupIdentifier = message.uniqueGroupIdentifier);
    if (message.attachmentsListId) {
      obj.attachmentsListId = message.attachmentsListId.map((e) => e);
    } else {
      obj.attachmentsListId = [];
    }
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? FileEntity.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    if (message.tasksListId) {
      obj.tasksListId = message.tasksListId.map((e) => e);
    } else {
      obj.tasksListId = [];
    }
    if (message.tasks) {
      obj.tasks = message.tasks.map((e) =>
        e ? AcTaskEntity.toJSON(e) : undefined
      );
    } else {
      obj.tasks = [];
    }
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcSectionEntity>, I>>(
    base?: I
  ): AcSectionEntity {
    return AcSectionEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcSectionEntity>, I>>(
    object: I
  ): AcSectionEntity {
    const message = createBaseAcSectionEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.format = object.format ?? undefined;
    message.title = object.title ?? undefined;
    message.header = object.header ?? undefined;
    message.headerExcerpt = object.headerExcerpt ?? undefined;
    message.uniqueGroupIdentifier = object.uniqueGroupIdentifier ?? undefined;
    message.attachmentsListId = object.attachmentsListId?.map((e) => e) || [];
    message.attachments =
      object.attachments?.map((e) => FileEntity.fromPartial(e)) || [];
    message.tasksListId = object.tasksListId?.map((e) => e) || [];
    message.tasks = object.tasks?.map((e) => AcTaskEntity.fromPartial(e)) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseAcTaskCreateReply(): AcTaskCreateReply {
  return { data: undefined, error: undefined };
}

export const AcTaskCreateReply = {
  encode(
    message: AcTaskCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcTaskEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcTaskCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcTaskCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcTaskEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcTaskCreateReply {
    return {
      data: isSet(object.data) ? AcTaskEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcTaskCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? AcTaskEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcTaskCreateReply>, I>>(
    base?: I
  ): AcTaskCreateReply {
    return AcTaskCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcTaskCreateReply>, I>>(
    object: I
  ): AcTaskCreateReply {
    const message = createBaseAcTaskCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcTaskEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcTaskReply(): AcTaskReply {
  return { data: undefined, error: undefined };
}

export const AcTaskReply = {
  encode(
    message: AcTaskReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcTaskEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcTaskReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcTaskReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcTaskEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcTaskReply {
    return {
      data: isSet(object.data) ? AcTaskEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcTaskReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? AcTaskEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcTaskReply>, I>>(base?: I): AcTaskReply {
    return AcTaskReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcTaskReply>, I>>(
    object: I
  ): AcTaskReply {
    const message = createBaseAcTaskReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcTaskEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcTaskQueryReply(): AcTaskQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const AcTaskQueryReply = {
  encode(
    message: AcTaskQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AcTaskEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcTaskQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcTaskQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(AcTaskEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcTaskQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AcTaskEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcTaskQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AcTaskEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcTaskQueryReply>, I>>(
    base?: I
  ): AcTaskQueryReply {
    return AcTaskQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcTaskQueryReply>, I>>(
    object: I
  ): AcTaskQueryReply {
    const message = createBaseAcTaskQueryReply();
    message.items = object.items?.map((e) => AcTaskEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcTaskEntity(): AcTaskEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    format: undefined,
    title: undefined,
    content: undefined,
    contentExcerpt: undefined,
    instruction: undefined,
    questionsListId: [],
    questions: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const AcTaskEntity = {
  encode(
    message: AcTaskEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.format !== undefined) {
      writer.uint32(66).string(message.format);
    }
    if (message.title !== undefined) {
      writer.uint32(74).string(message.title);
    }
    if (message.content !== undefined) {
      writer.uint32(82).string(message.content);
    }
    if (message.contentExcerpt !== undefined) {
      writer.uint32(90).string(message.contentExcerpt);
    }
    if (message.instruction !== undefined) {
      writer.uint32(98).string(message.instruction);
    }
    for (const v of message.questionsListId) {
      writer.uint32(114).string(v!);
    }
    for (const v of message.questions) {
      QuestionEntity.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(128).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(136).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(144).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(154).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(162).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcTaskEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcTaskEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.format = reader.string();
          break;
        case 9:
          message.title = reader.string();
          break;
        case 10:
          message.content = reader.string();
          break;
        case 11:
          message.contentExcerpt = reader.string();
          break;
        case 12:
          message.instruction = reader.string();
          break;
        case 14:
          message.questionsListId.push(reader.string());
          break;
        case 15:
          message.questions.push(
            QuestionEntity.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.createdFormatted = reader.string();
          break;
        case 20:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcTaskEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      format: isSet(object.format) ? String(object.format) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      content: isSet(object.content) ? String(object.content) : undefined,
      contentExcerpt: isSet(object.contentExcerpt)
        ? String(object.contentExcerpt)
        : undefined,
      instruction: isSet(object.instruction)
        ? String(object.instruction)
        : undefined,
      questionsListId: Array.isArray(object?.questionsListId)
        ? object.questionsListId.map((e: any) => String(e))
        : [],
      questions: Array.isArray(object?.questions)
        ? object.questions.map((e: any) => QuestionEntity.fromJSON(e))
        : [],
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: AcTaskEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.format !== undefined && (obj.format = message.format);
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    message.contentExcerpt !== undefined &&
      (obj.contentExcerpt = message.contentExcerpt);
    message.instruction !== undefined &&
      (obj.instruction = message.instruction);
    if (message.questionsListId) {
      obj.questionsListId = message.questionsListId.map((e) => e);
    } else {
      obj.questionsListId = [];
    }
    if (message.questions) {
      obj.questions = message.questions.map((e) =>
        e ? QuestionEntity.toJSON(e) : undefined
      );
    } else {
      obj.questions = [];
    }
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcTaskEntity>, I>>(
    base?: I
  ): AcTaskEntity {
    return AcTaskEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcTaskEntity>, I>>(
    object: I
  ): AcTaskEntity {
    const message = createBaseAcTaskEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.format = object.format ?? undefined;
    message.title = object.title ?? undefined;
    message.content = object.content ?? undefined;
    message.contentExcerpt = object.contentExcerpt ?? undefined;
    message.instruction = object.instruction ?? undefined;
    message.questionsListId = object.questionsListId?.map((e) => e) || [];
    message.questions =
      object.questions?.map((e) => QuestionEntity.fromPartial(e)) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseClassRoomCreateReply(): ClassRoomCreateReply {
  return { data: undefined, error: undefined };
}

export const ClassRoomCreateReply = {
  encode(
    message: ClassRoomCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ClassRoomEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClassRoomCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassRoomCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ClassRoomEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassRoomCreateReply {
    return {
      data: isSet(object.data)
        ? ClassRoomEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ClassRoomCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ClassRoomEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClassRoomCreateReply>, I>>(
    base?: I
  ): ClassRoomCreateReply {
    return ClassRoomCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClassRoomCreateReply>, I>>(
    object: I
  ): ClassRoomCreateReply {
    const message = createBaseClassRoomCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ClassRoomEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseClassRoomReply(): ClassRoomReply {
  return { data: undefined, error: undefined };
}

export const ClassRoomReply = {
  encode(
    message: ClassRoomReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ClassRoomEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassRoomReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassRoomReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ClassRoomEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassRoomReply {
    return {
      data: isSet(object.data)
        ? ClassRoomEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ClassRoomReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ClassRoomEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClassRoomReply>, I>>(
    base?: I
  ): ClassRoomReply {
    return ClassRoomReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClassRoomReply>, I>>(
    object: I
  ): ClassRoomReply {
    const message = createBaseClassRoomReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ClassRoomEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseClassRoomQueryReply(): ClassRoomQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ClassRoomQueryReply = {
  encode(
    message: ClassRoomQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ClassRoomEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassRoomQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassRoomQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ClassRoomEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassRoomQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ClassRoomEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ClassRoomQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ClassRoomEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClassRoomQueryReply>, I>>(
    base?: I
  ): ClassRoomQueryReply {
    return ClassRoomQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClassRoomQueryReply>, I>>(
    object: I
  ): ClassRoomQueryReply {
    const message = createBaseClassRoomQueryReply();
    message.items =
      object.items?.map((e) => ClassRoomEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseClassRoomEntity(): ClassRoomEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    title: undefined,
    description: undefined,
    descriptionExcerpt: undefined,
    accessLevel: undefined,
    provider: undefined,
    membersListId: [],
    members: [],
    meetUrl: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ClassRoomEntity = {
  encode(
    message: ClassRoomEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.title !== undefined) {
      writer.uint32(66).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(74).string(message.description);
    }
    if (message.descriptionExcerpt !== undefined) {
      writer.uint32(82).string(message.descriptionExcerpt);
    }
    if (message.accessLevel !== undefined) {
      writer.uint32(90).string(message.accessLevel);
    }
    if (message.provider !== undefined) {
      writer.uint32(98).string(message.provider);
    }
    for (const v of message.membersListId) {
      writer.uint32(114).string(v!);
    }
    for (const v of message.members) {
      UserEntity.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.meetUrl !== undefined) {
      writer.uint32(130).string(message.meetUrl);
    }
    if (message.rank !== 0) {
      writer.uint32(136).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(144).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(152).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(162).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(170).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassRoomEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassRoomEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.title = reader.string();
          break;
        case 9:
          message.description = reader.string();
          break;
        case 10:
          message.descriptionExcerpt = reader.string();
          break;
        case 11:
          message.accessLevel = reader.string();
          break;
        case 12:
          message.provider = reader.string();
          break;
        case 14:
          message.membersListId.push(reader.string());
          break;
        case 15:
          message.members.push(UserEntity.decode(reader, reader.uint32()));
          break;
        case 16:
          message.meetUrl = reader.string();
          break;
        case 17:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.createdFormatted = reader.string();
          break;
        case 21:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassRoomEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      descriptionExcerpt: isSet(object.descriptionExcerpt)
        ? String(object.descriptionExcerpt)
        : undefined,
      accessLevel: isSet(object.accessLevel)
        ? String(object.accessLevel)
        : undefined,
      provider: isSet(object.provider) ? String(object.provider) : undefined,
      membersListId: Array.isArray(object?.membersListId)
        ? object.membersListId.map((e: any) => String(e))
        : [],
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => UserEntity.fromJSON(e))
        : [],
      meetUrl: isSet(object.meetUrl) ? String(object.meetUrl) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ClassRoomEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.descriptionExcerpt !== undefined &&
      (obj.descriptionExcerpt = message.descriptionExcerpt);
    message.accessLevel !== undefined &&
      (obj.accessLevel = message.accessLevel);
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.membersListId) {
      obj.membersListId = message.membersListId.map((e) => e);
    } else {
      obj.membersListId = [];
    }
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? UserEntity.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    message.meetUrl !== undefined && (obj.meetUrl = message.meetUrl);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClassRoomEntity>, I>>(
    base?: I
  ): ClassRoomEntity {
    return ClassRoomEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClassRoomEntity>, I>>(
    object: I
  ): ClassRoomEntity {
    const message = createBaseClassRoomEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.descriptionExcerpt = object.descriptionExcerpt ?? undefined;
    message.accessLevel = object.accessLevel ?? undefined;
    message.provider = object.provider ?? undefined;
    message.membersListId = object.membersListId?.map((e) => e) || [];
    message.members =
      object.members?.map((e) => UserEntity.fromPartial(e)) || [];
    message.meetUrl = object.meetUrl ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseCourseCreateReply(): CourseCreateReply {
  return { data: undefined, error: undefined };
}

export const CourseCreateReply = {
  encode(
    message: CourseCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      CourseEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CourseCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCourseCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = CourseEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CourseCreateReply {
    return {
      data: isSet(object.data) ? CourseEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: CourseCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? CourseEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CourseCreateReply>, I>>(
    base?: I
  ): CourseCreateReply {
    return CourseCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CourseCreateReply>, I>>(
    object: I
  ): CourseCreateReply {
    const message = createBaseCourseCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? CourseEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseCourseReply(): CourseReply {
  return { data: undefined, error: undefined };
}

export const CourseReply = {
  encode(
    message: CourseReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      CourseEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CourseReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCourseReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = CourseEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CourseReply {
    return {
      data: isSet(object.data) ? CourseEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: CourseReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? CourseEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CourseReply>, I>>(base?: I): CourseReply {
    return CourseReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CourseReply>, I>>(
    object: I
  ): CourseReply {
    const message = createBaseCourseReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? CourseEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseCourseQueryReply(): CourseQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const CourseQueryReply = {
  encode(
    message: CourseQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      CourseEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CourseQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCourseQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(CourseEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CourseQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => CourseEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: CourseQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? CourseEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CourseQueryReply>, I>>(
    base?: I
  ): CourseQueryReply {
    return CourseQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CourseQueryReply>, I>>(
    object: I
  ): CourseQueryReply {
    const message = createBaseCourseQueryReply();
    message.items = object.items?.map((e) => CourseEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseCourseEntity(): CourseEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    introVideoUrl: undefined,
    attachmentsListId: [],
    attachments: [],
    images: undefined,
    title: undefined,
    description: undefined,
    descriptionExcerpt: undefined,
    excerpt: undefined,
    excerptExcerpt: undefined,
    duration: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const CourseEntity = {
  encode(
    message: CourseEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.introVideoUrl !== undefined) {
      writer.uint32(66).string(message.introVideoUrl);
    }
    for (const v of message.attachmentsListId) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.attachments) {
      FileEntity.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.images !== undefined) {
      writer.uint32(98).string(message.images);
    }
    if (message.title !== undefined) {
      writer.uint32(106).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(114).string(message.description);
    }
    if (message.descriptionExcerpt !== undefined) {
      writer.uint32(122).string(message.descriptionExcerpt);
    }
    if (message.excerpt !== undefined) {
      writer.uint32(130).string(message.excerpt);
    }
    if (message.excerptExcerpt !== undefined) {
      writer.uint32(138).string(message.excerptExcerpt);
    }
    if (message.duration !== undefined) {
      writer.uint32(144).int64(message.duration);
    }
    if (message.rank !== 0) {
      writer.uint32(152).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(160).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(168).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(178).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(186).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CourseEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCourseEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.introVideoUrl = reader.string();
          break;
        case 10:
          message.attachmentsListId.push(reader.string());
          break;
        case 11:
          message.attachments.push(FileEntity.decode(reader, reader.uint32()));
          break;
        case 12:
          message.images = reader.string();
          break;
        case 13:
          message.title = reader.string();
          break;
        case 14:
          message.description = reader.string();
          break;
        case 15:
          message.descriptionExcerpt = reader.string();
          break;
        case 16:
          message.excerpt = reader.string();
          break;
        case 17:
          message.excerptExcerpt = reader.string();
          break;
        case 18:
          message.duration = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.createdFormatted = reader.string();
          break;
        case 23:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CourseEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      introVideoUrl: isSet(object.introVideoUrl)
        ? String(object.introVideoUrl)
        : undefined,
      attachmentsListId: Array.isArray(object?.attachmentsListId)
        ? object.attachmentsListId.map((e: any) => String(e))
        : [],
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => FileEntity.fromJSON(e))
        : [],
      images: isSet(object.images) ? String(object.images) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      descriptionExcerpt: isSet(object.descriptionExcerpt)
        ? String(object.descriptionExcerpt)
        : undefined,
      excerpt: isSet(object.excerpt) ? String(object.excerpt) : undefined,
      excerptExcerpt: isSet(object.excerptExcerpt)
        ? String(object.excerptExcerpt)
        : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: CourseEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.introVideoUrl !== undefined &&
      (obj.introVideoUrl = message.introVideoUrl);
    if (message.attachmentsListId) {
      obj.attachmentsListId = message.attachmentsListId.map((e) => e);
    } else {
      obj.attachmentsListId = [];
    }
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? FileEntity.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    message.images !== undefined && (obj.images = message.images);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.descriptionExcerpt !== undefined &&
      (obj.descriptionExcerpt = message.descriptionExcerpt);
    message.excerpt !== undefined && (obj.excerpt = message.excerpt);
    message.excerptExcerpt !== undefined &&
      (obj.excerptExcerpt = message.excerptExcerpt);
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CourseEntity>, I>>(
    base?: I
  ): CourseEntity {
    return CourseEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CourseEntity>, I>>(
    object: I
  ): CourseEntity {
    const message = createBaseCourseEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.introVideoUrl = object.introVideoUrl ?? undefined;
    message.attachmentsListId = object.attachmentsListId?.map((e) => e) || [];
    message.attachments =
      object.attachments?.map((e) => FileEntity.fromPartial(e)) || [];
    message.images = object.images ?? undefined;
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.descriptionExcerpt = object.descriptionExcerpt ?? undefined;
    message.excerpt = object.excerpt ?? undefined;
    message.excerptExcerpt = object.excerptExcerpt ?? undefined;
    message.duration = object.duration ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseCourseEnrollmentCreateReply(): CourseEnrollmentCreateReply {
  return { data: undefined, error: undefined };
}

export const CourseEnrollmentCreateReply = {
  encode(
    message: CourseEnrollmentCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      CourseEnrollmentEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CourseEnrollmentCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCourseEnrollmentCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = CourseEnrollmentEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CourseEnrollmentCreateReply {
    return {
      data: isSet(object.data)
        ? CourseEnrollmentEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: CourseEnrollmentCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? CourseEnrollmentEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CourseEnrollmentCreateReply>, I>>(
    base?: I
  ): CourseEnrollmentCreateReply {
    return CourseEnrollmentCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CourseEnrollmentCreateReply>, I>>(
    object: I
  ): CourseEnrollmentCreateReply {
    const message = createBaseCourseEnrollmentCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? CourseEnrollmentEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseCourseEnrollmentReply(): CourseEnrollmentReply {
  return { data: undefined, error: undefined };
}

export const CourseEnrollmentReply = {
  encode(
    message: CourseEnrollmentReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      CourseEnrollmentEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CourseEnrollmentReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCourseEnrollmentReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = CourseEnrollmentEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CourseEnrollmentReply {
    return {
      data: isSet(object.data)
        ? CourseEnrollmentEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: CourseEnrollmentReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? CourseEnrollmentEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CourseEnrollmentReply>, I>>(
    base?: I
  ): CourseEnrollmentReply {
    return CourseEnrollmentReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CourseEnrollmentReply>, I>>(
    object: I
  ): CourseEnrollmentReply {
    const message = createBaseCourseEnrollmentReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? CourseEnrollmentEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseCourseEnrollmentQueryReply(): CourseEnrollmentQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const CourseEnrollmentQueryReply = {
  encode(
    message: CourseEnrollmentQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      CourseEnrollmentEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CourseEnrollmentQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCourseEnrollmentQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            CourseEnrollmentEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CourseEnrollmentQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => CourseEnrollmentEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: CourseEnrollmentQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? CourseEnrollmentEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CourseEnrollmentQueryReply>, I>>(
    base?: I
  ): CourseEnrollmentQueryReply {
    return CourseEnrollmentQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CourseEnrollmentQueryReply>, I>>(
    object: I
  ): CourseEnrollmentQueryReply {
    const message = createBaseCourseEnrollmentQueryReply();
    message.items =
      object.items?.map((e) => CourseEnrollmentEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseCourseEnrollmentEntity(): CourseEnrollmentEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    courseId: undefined,
    course: undefined,
    unitProgresses: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const CourseEnrollmentEntity = {
  encode(
    message: CourseEnrollmentEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.courseId !== undefined) {
      writer.uint32(74).string(message.courseId);
    }
    if (message.course !== undefined) {
      CourseEntity.encode(message.course, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.unitProgresses) {
      CourseEnrollmentUnitProgressEntity.encode(
        v!,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(96).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(104).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(112).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(122).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(130).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CourseEnrollmentEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCourseEnrollmentEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.courseId = reader.string();
          break;
        case 10:
          message.course = CourseEntity.decode(reader, reader.uint32());
          break;
        case 11:
          message.unitProgresses.push(
            CourseEnrollmentUnitProgressEntity.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.createdFormatted = reader.string();
          break;
        case 16:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CourseEnrollmentEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      courseId: isSet(object.courseId) ? String(object.courseId) : undefined,
      course: isSet(object.course)
        ? CourseEntity.fromJSON(object.course)
        : undefined,
      unitProgresses: Array.isArray(object?.unitProgresses)
        ? object.unitProgresses.map((e: any) =>
            CourseEnrollmentUnitProgressEntity.fromJSON(e)
          )
        : [],
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: CourseEnrollmentEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.courseId !== undefined && (obj.courseId = message.courseId);
    message.course !== undefined &&
      (obj.course = message.course
        ? CourseEntity.toJSON(message.course)
        : undefined);
    if (message.unitProgresses) {
      obj.unitProgresses = message.unitProgresses.map((e) =>
        e ? CourseEnrollmentUnitProgressEntity.toJSON(e) : undefined
      );
    } else {
      obj.unitProgresses = [];
    }
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CourseEnrollmentEntity>, I>>(
    base?: I
  ): CourseEnrollmentEntity {
    return CourseEnrollmentEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CourseEnrollmentEntity>, I>>(
    object: I
  ): CourseEnrollmentEntity {
    const message = createBaseCourseEnrollmentEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.courseId = object.courseId ?? undefined;
    message.course =
      object.course !== undefined && object.course !== null
        ? CourseEntity.fromPartial(object.course)
        : undefined;
    message.unitProgresses =
      object.unitProgresses?.map((e) =>
        CourseEnrollmentUnitProgressEntity.fromPartial(e)
      ) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseCourseEnrollmentUnitProgressEntity(): CourseEnrollmentUnitProgressEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    unitId: undefined,
    unit: undefined,
    progress: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const CourseEnrollmentUnitProgressEntity = {
  encode(
    message: CourseEnrollmentUnitProgressEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.unitId !== undefined) {
      writer.uint32(74).string(message.unitId);
    }
    if (message.unit !== undefined) {
      UnitEntity.encode(message.unit, writer.uint32(82).fork()).ldelim();
    }
    if (message.progress !== undefined) {
      writer.uint32(88).int64(message.progress);
    }
    if (message.rank !== 0) {
      writer.uint32(96).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(104).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(112).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(122).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(130).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CourseEnrollmentUnitProgressEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCourseEnrollmentUnitProgressEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.unitId = reader.string();
          break;
        case 10:
          message.unit = UnitEntity.decode(reader, reader.uint32());
          break;
        case 11:
          message.progress = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.createdFormatted = reader.string();
          break;
        case 16:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CourseEnrollmentUnitProgressEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      unitId: isSet(object.unitId) ? String(object.unitId) : undefined,
      unit: isSet(object.unit) ? UnitEntity.fromJSON(object.unit) : undefined,
      progress: isSet(object.progress) ? Number(object.progress) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: CourseEnrollmentUnitProgressEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.unitId !== undefined && (obj.unitId = message.unitId);
    message.unit !== undefined &&
      (obj.unit = message.unit ? UnitEntity.toJSON(message.unit) : undefined);
    message.progress !== undefined &&
      (obj.progress = Math.round(message.progress));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CourseEnrollmentUnitProgressEntity>, I>>(
    base?: I
  ): CourseEnrollmentUnitProgressEntity {
    return CourseEnrollmentUnitProgressEntity.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<CourseEnrollmentUnitProgressEntity>, I>
  >(object: I): CourseEnrollmentUnitProgressEntity {
    const message = createBaseCourseEnrollmentUnitProgressEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.unitId = object.unitId ?? undefined;
    message.unit =
      object.unit !== undefined && object.unit !== null
        ? UnitEntity.fromPartial(object.unit)
        : undefined;
    message.progress = object.progress ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseExamCreateReply(): ExamCreateReply {
  return { data: undefined, error: undefined };
}

export const ExamCreateReply = {
  encode(
    message: ExamCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ExamEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExamCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ExamEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamCreateReply {
    return {
      data: isSet(object.data) ? ExamEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ExamCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? ExamEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamCreateReply>, I>>(
    base?: I
  ): ExamCreateReply {
    return ExamCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamCreateReply>, I>>(
    object: I
  ): ExamCreateReply {
    const message = createBaseExamCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ExamEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseExamReply(): ExamReply {
  return { data: undefined, error: undefined };
}

export const ExamReply = {
  encode(
    message: ExamReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ExamEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExamReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ExamEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamReply {
    return {
      data: isSet(object.data) ? ExamEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ExamReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? ExamEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamReply>, I>>(base?: I): ExamReply {
    return ExamReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamReply>, I>>(
    object: I
  ): ExamReply {
    const message = createBaseExamReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ExamEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseExamQueryReply(): ExamQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ExamQueryReply = {
  encode(
    message: ExamQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ExamEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExamQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ExamEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ExamEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ExamQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ExamEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamQueryReply>, I>>(
    base?: I
  ): ExamQueryReply {
    return ExamQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamQueryReply>, I>>(
    object: I
  ): ExamQueryReply {
    const message = createBaseExamQueryReply();
    message.items = object.items?.map((e) => ExamEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseExamEntity(): ExamEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    format: undefined,
    title: undefined,
    titleExcerpt: undefined,
    revision: undefined,
    description: undefined,
    descriptionExcerpt: undefined,
    sectionsListId: [],
    sections: [],
    attachmentsListId: [],
    attachments: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ExamEntity = {
  encode(
    message: ExamEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.format !== undefined) {
      writer.uint32(66).string(message.format);
    }
    if (message.title !== undefined) {
      writer.uint32(74).string(message.title);
    }
    if (message.titleExcerpt !== undefined) {
      writer.uint32(82).string(message.titleExcerpt);
    }
    if (message.revision !== undefined) {
      writer.uint32(88).int64(message.revision);
    }
    if (message.description !== undefined) {
      writer.uint32(98).string(message.description);
    }
    if (message.descriptionExcerpt !== undefined) {
      writer.uint32(106).string(message.descriptionExcerpt);
    }
    for (const v of message.sectionsListId) {
      writer.uint32(122).string(v!);
    }
    for (const v of message.sections) {
      AcSectionEntity.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.attachmentsListId) {
      writer.uint32(146).string(v!);
    }
    for (const v of message.attachments) {
      FileEntity.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(160).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(168).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(176).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(186).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(194).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExamEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.format = reader.string();
          break;
        case 9:
          message.title = reader.string();
          break;
        case 10:
          message.titleExcerpt = reader.string();
          break;
        case 11:
          message.revision = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.description = reader.string();
          break;
        case 13:
          message.descriptionExcerpt = reader.string();
          break;
        case 15:
          message.sectionsListId.push(reader.string());
          break;
        case 16:
          message.sections.push(
            AcSectionEntity.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.attachmentsListId.push(reader.string());
          break;
        case 19:
          message.attachments.push(FileEntity.decode(reader, reader.uint32()));
          break;
        case 20:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 23:
          message.createdFormatted = reader.string();
          break;
        case 24:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      format: isSet(object.format) ? String(object.format) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      titleExcerpt: isSet(object.titleExcerpt)
        ? String(object.titleExcerpt)
        : undefined,
      revision: isSet(object.revision) ? Number(object.revision) : undefined,
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      descriptionExcerpt: isSet(object.descriptionExcerpt)
        ? String(object.descriptionExcerpt)
        : undefined,
      sectionsListId: Array.isArray(object?.sectionsListId)
        ? object.sectionsListId.map((e: any) => String(e))
        : [],
      sections: Array.isArray(object?.sections)
        ? object.sections.map((e: any) => AcSectionEntity.fromJSON(e))
        : [],
      attachmentsListId: Array.isArray(object?.attachmentsListId)
        ? object.attachmentsListId.map((e: any) => String(e))
        : [],
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => FileEntity.fromJSON(e))
        : [],
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ExamEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.format !== undefined && (obj.format = message.format);
    message.title !== undefined && (obj.title = message.title);
    message.titleExcerpt !== undefined &&
      (obj.titleExcerpt = message.titleExcerpt);
    message.revision !== undefined &&
      (obj.revision = Math.round(message.revision));
    message.description !== undefined &&
      (obj.description = message.description);
    message.descriptionExcerpt !== undefined &&
      (obj.descriptionExcerpt = message.descriptionExcerpt);
    if (message.sectionsListId) {
      obj.sectionsListId = message.sectionsListId.map((e) => e);
    } else {
      obj.sectionsListId = [];
    }
    if (message.sections) {
      obj.sections = message.sections.map((e) =>
        e ? AcSectionEntity.toJSON(e) : undefined
      );
    } else {
      obj.sections = [];
    }
    if (message.attachmentsListId) {
      obj.attachmentsListId = message.attachmentsListId.map((e) => e);
    } else {
      obj.attachmentsListId = [];
    }
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? FileEntity.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamEntity>, I>>(base?: I): ExamEntity {
    return ExamEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamEntity>, I>>(
    object: I
  ): ExamEntity {
    const message = createBaseExamEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.format = object.format ?? undefined;
    message.title = object.title ?? undefined;
    message.titleExcerpt = object.titleExcerpt ?? undefined;
    message.revision = object.revision ?? undefined;
    message.description = object.description ?? undefined;
    message.descriptionExcerpt = object.descriptionExcerpt ?? undefined;
    message.sectionsListId = object.sectionsListId?.map((e) => e) || [];
    message.sections =
      object.sections?.map((e) => AcSectionEntity.fromPartial(e)) || [];
    message.attachmentsListId = object.attachmentsListId?.map((e) => e) || [];
    message.attachments =
      object.attachments?.map((e) => FileEntity.fromPartial(e)) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseExamSessionCreateReply(): ExamSessionCreateReply {
  return { data: undefined, error: undefined };
}

export const ExamSessionCreateReply = {
  encode(
    message: ExamSessionCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ExamSessionEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExamSessionCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSessionCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ExamSessionEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamSessionCreateReply {
    return {
      data: isSet(object.data)
        ? ExamSessionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ExamSessionCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ExamSessionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamSessionCreateReply>, I>>(
    base?: I
  ): ExamSessionCreateReply {
    return ExamSessionCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamSessionCreateReply>, I>>(
    object: I
  ): ExamSessionCreateReply {
    const message = createBaseExamSessionCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ExamSessionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseExamSessionReply(): ExamSessionReply {
  return { data: undefined, error: undefined };
}

export const ExamSessionReply = {
  encode(
    message: ExamSessionReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ExamSessionEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExamSessionReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSessionReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ExamSessionEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamSessionReply {
    return {
      data: isSet(object.data)
        ? ExamSessionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ExamSessionReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ExamSessionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamSessionReply>, I>>(
    base?: I
  ): ExamSessionReply {
    return ExamSessionReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamSessionReply>, I>>(
    object: I
  ): ExamSessionReply {
    const message = createBaseExamSessionReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ExamSessionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseExamSessionQueryReply(): ExamSessionQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ExamSessionQueryReply = {
  encode(
    message: ExamSessionQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ExamSessionEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExamSessionQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSessionQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ExamSessionEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamSessionQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ExamSessionEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ExamSessionQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ExamSessionEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamSessionQueryReply>, I>>(
    base?: I
  ): ExamSessionQueryReply {
    return ExamSessionQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamSessionQueryReply>, I>>(
    object: I
  ): ExamSessionQueryReply {
    const message = createBaseExamSessionQueryReply();
    message.items =
      object.items?.map((e) => ExamSessionEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseExamSessionEntity(): ExamSessionEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    sourceExamId: undefined,
    sourceExam: undefined,
    results: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ExamSessionEntity = {
  encode(
    message: ExamSessionEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.sourceExamId !== undefined) {
      writer.uint32(74).string(message.sourceExamId);
    }
    if (message.sourceExam !== undefined) {
      ExamEntity.encode(message.sourceExam, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.results) {
      ExamSessionResultEntity.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(96).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(104).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(112).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(122).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(130).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExamSessionEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSessionEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.sourceExamId = reader.string();
          break;
        case 10:
          message.sourceExam = ExamEntity.decode(reader, reader.uint32());
          break;
        case 11:
          message.results.push(
            ExamSessionResultEntity.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.createdFormatted = reader.string();
          break;
        case 16:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamSessionEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      sourceExamId: isSet(object.sourceExamId)
        ? String(object.sourceExamId)
        : undefined,
      sourceExam: isSet(object.sourceExam)
        ? ExamEntity.fromJSON(object.sourceExam)
        : undefined,
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => ExamSessionResultEntity.fromJSON(e))
        : [],
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ExamSessionEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.sourceExamId !== undefined &&
      (obj.sourceExamId = message.sourceExamId);
    message.sourceExam !== undefined &&
      (obj.sourceExam = message.sourceExam
        ? ExamEntity.toJSON(message.sourceExam)
        : undefined);
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? ExamSessionResultEntity.toJSON(e) : undefined
      );
    } else {
      obj.results = [];
    }
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamSessionEntity>, I>>(
    base?: I
  ): ExamSessionEntity {
    return ExamSessionEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamSessionEntity>, I>>(
    object: I
  ): ExamSessionEntity {
    const message = createBaseExamSessionEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.sourceExamId = object.sourceExamId ?? undefined;
    message.sourceExam =
      object.sourceExam !== undefined && object.sourceExam !== null
        ? ExamEntity.fromPartial(object.sourceExam)
        : undefined;
    message.results =
      object.results?.map((e) => ExamSessionResultEntity.fromPartial(e)) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseExamSessionResultEntity(): ExamSessionResultEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    questionId: undefined,
    question: undefined,
    choices: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ExamSessionResultEntity = {
  encode(
    message: ExamSessionResultEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.questionId !== undefined) {
      writer.uint32(74).string(message.questionId);
    }
    if (message.question !== undefined) {
      QuestionEntity.encode(
        message.question,
        writer.uint32(82).fork()
      ).ldelim();
    }
    for (const v of message.choices) {
      ExamSessionResultChoicesEntity.encode(
        v!,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(96).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(104).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(112).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(122).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(130).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExamSessionResultEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSessionResultEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.questionId = reader.string();
          break;
        case 10:
          message.question = QuestionEntity.decode(reader, reader.uint32());
          break;
        case 11:
          message.choices.push(
            ExamSessionResultChoicesEntity.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.createdFormatted = reader.string();
          break;
        case 16:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamSessionResultEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      questionId: isSet(object.questionId)
        ? String(object.questionId)
        : undefined,
      question: isSet(object.question)
        ? QuestionEntity.fromJSON(object.question)
        : undefined,
      choices: Array.isArray(object?.choices)
        ? object.choices.map((e: any) =>
            ExamSessionResultChoicesEntity.fromJSON(e)
          )
        : [],
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ExamSessionResultEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.questionId !== undefined && (obj.questionId = message.questionId);
    message.question !== undefined &&
      (obj.question = message.question
        ? QuestionEntity.toJSON(message.question)
        : undefined);
    if (message.choices) {
      obj.choices = message.choices.map((e) =>
        e ? ExamSessionResultChoicesEntity.toJSON(e) : undefined
      );
    } else {
      obj.choices = [];
    }
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamSessionResultEntity>, I>>(
    base?: I
  ): ExamSessionResultEntity {
    return ExamSessionResultEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamSessionResultEntity>, I>>(
    object: I
  ): ExamSessionResultEntity {
    const message = createBaseExamSessionResultEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.questionId = object.questionId ?? undefined;
    message.question =
      object.question !== undefined && object.question !== null
        ? QuestionEntity.fromPartial(object.question)
        : undefined;
    message.choices =
      object.choices?.map((e) =>
        ExamSessionResultChoicesEntity.fromPartial(e)
      ) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseExamSessionResultChoicesEntity(): ExamSessionResultChoicesEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    content: undefined,
    contentExcerpt: undefined,
    choiceId: undefined,
    choice: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ExamSessionResultChoicesEntity = {
  encode(
    message: ExamSessionResultChoicesEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.content !== undefined) {
      writer.uint32(66).string(message.content);
    }
    if (message.contentExcerpt !== undefined) {
      writer.uint32(74).string(message.contentExcerpt);
    }
    if (message.choiceId !== undefined) {
      writer.uint32(90).string(message.choiceId);
    }
    if (message.choice !== undefined) {
      QuestionChoicesEntity.encode(
        message.choice,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(104).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(112).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(120).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(130).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(138).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExamSessionResultChoicesEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSessionResultChoicesEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.content = reader.string();
          break;
        case 9:
          message.contentExcerpt = reader.string();
          break;
        case 11:
          message.choiceId = reader.string();
          break;
        case 12:
          message.choice = QuestionChoicesEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.createdFormatted = reader.string();
          break;
        case 17:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamSessionResultChoicesEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      content: isSet(object.content) ? String(object.content) : undefined,
      contentExcerpt: isSet(object.contentExcerpt)
        ? String(object.contentExcerpt)
        : undefined,
      choiceId: isSet(object.choiceId) ? String(object.choiceId) : undefined,
      choice: isSet(object.choice)
        ? QuestionChoicesEntity.fromJSON(object.choice)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ExamSessionResultChoicesEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.content !== undefined && (obj.content = message.content);
    message.contentExcerpt !== undefined &&
      (obj.contentExcerpt = message.contentExcerpt);
    message.choiceId !== undefined && (obj.choiceId = message.choiceId);
    message.choice !== undefined &&
      (obj.choice = message.choice
        ? QuestionChoicesEntity.toJSON(message.choice)
        : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamSessionResultChoicesEntity>, I>>(
    base?: I
  ): ExamSessionResultChoicesEntity {
    return ExamSessionResultChoicesEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamSessionResultChoicesEntity>, I>>(
    object: I
  ): ExamSessionResultChoicesEntity {
    const message = createBaseExamSessionResultChoicesEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.content = object.content ?? undefined;
    message.contentExcerpt = object.contentExcerpt ?? undefined;
    message.choiceId = object.choiceId ?? undefined;
    message.choice =
      object.choice !== undefined && object.choice !== null
        ? QuestionChoicesEntity.fromPartial(object.choice)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseExamSessionProgressDto(): ExamSessionProgressDto {
  return {
    examSessionId: undefined,
    examSession: undefined,
    progressPercentage: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    remainingQuestions: 0,
    examTotalQuestions: 0,
    userFilledQuestions: 0,
  };
}

export const ExamSessionProgressDto = {
  encode(
    message: ExamSessionProgressDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.examSessionId !== undefined) {
      writer.uint32(10).string(message.examSessionId);
    }
    if (message.examSession !== undefined) {
      ExamSessionEntity.encode(
        message.examSession,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.progressPercentage !== 0) {
      writer.uint32(29).float(message.progressPercentage);
    }
    if (message.correctAnswers !== 0) {
      writer.uint32(32).int64(message.correctAnswers);
    }
    if (message.wrongAnswers !== 0) {
      writer.uint32(40).int64(message.wrongAnswers);
    }
    if (message.remainingQuestions !== 0) {
      writer.uint32(48).int64(message.remainingQuestions);
    }
    if (message.examTotalQuestions !== 0) {
      writer.uint32(56).int64(message.examTotalQuestions);
    }
    if (message.userFilledQuestions !== 0) {
      writer.uint32(64).int64(message.userFilledQuestions);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExamSessionProgressDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSessionProgressDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.examSessionId = reader.string();
          break;
        case 2:
          message.examSession = ExamSessionEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.progressPercentage = reader.float();
          break;
        case 4:
          message.correctAnswers = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.wrongAnswers = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.remainingQuestions = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.examTotalQuestions = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.userFilledQuestions = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamSessionProgressDto {
    return {
      examSessionId: isSet(object.examSessionId)
        ? String(object.examSessionId)
        : undefined,
      examSession: isSet(object.examSession)
        ? ExamSessionEntity.fromJSON(object.examSession)
        : undefined,
      progressPercentage: isSet(object.progressPercentage)
        ? Number(object.progressPercentage)
        : 0,
      correctAnswers: isSet(object.correctAnswers)
        ? Number(object.correctAnswers)
        : 0,
      wrongAnswers: isSet(object.wrongAnswers)
        ? Number(object.wrongAnswers)
        : 0,
      remainingQuestions: isSet(object.remainingQuestions)
        ? Number(object.remainingQuestions)
        : 0,
      examTotalQuestions: isSet(object.examTotalQuestions)
        ? Number(object.examTotalQuestions)
        : 0,
      userFilledQuestions: isSet(object.userFilledQuestions)
        ? Number(object.userFilledQuestions)
        : 0,
    };
  },

  toJSON(message: ExamSessionProgressDto): unknown {
    const obj: any = {};
    message.examSessionId !== undefined &&
      (obj.examSessionId = message.examSessionId);
    message.examSession !== undefined &&
      (obj.examSession = message.examSession
        ? ExamSessionEntity.toJSON(message.examSession)
        : undefined);
    message.progressPercentage !== undefined &&
      (obj.progressPercentage = message.progressPercentage);
    message.correctAnswers !== undefined &&
      (obj.correctAnswers = Math.round(message.correctAnswers));
    message.wrongAnswers !== undefined &&
      (obj.wrongAnswers = Math.round(message.wrongAnswers));
    message.remainingQuestions !== undefined &&
      (obj.remainingQuestions = Math.round(message.remainingQuestions));
    message.examTotalQuestions !== undefined &&
      (obj.examTotalQuestions = Math.round(message.examTotalQuestions));
    message.userFilledQuestions !== undefined &&
      (obj.userFilledQuestions = Math.round(message.userFilledQuestions));
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamSessionProgressDto>, I>>(
    base?: I
  ): ExamSessionProgressDto {
    return ExamSessionProgressDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamSessionProgressDto>, I>>(
    object: I
  ): ExamSessionProgressDto {
    const message = createBaseExamSessionProgressDto();
    message.examSessionId = object.examSessionId ?? undefined;
    message.examSession =
      object.examSession !== undefined && object.examSession !== null
        ? ExamSessionEntity.fromPartial(object.examSession)
        : undefined;
    message.progressPercentage = object.progressPercentage ?? 0;
    message.correctAnswers = object.correctAnswers ?? 0;
    message.wrongAnswers = object.wrongAnswers ?? 0;
    message.remainingQuestions = object.remainingQuestions ?? 0;
    message.examTotalQuestions = object.examTotalQuestions ?? 0;
    message.userFilledQuestions = object.userFilledQuestions ?? 0;
    return message;
  },
};

function createBaseExamSessionStatQueryResult(): ExamSessionStatQueryResult {
  return {
    itemsCount: 0,
    sectionUniqueId: "",
    sessionUniqueId: "",
    examUniqueId: "",
    examTitle: "",
    sectionTitle: "",
    statGroup: "",
    uniqueGroupIdentifier: "",
  };
}

export const ExamSessionStatQueryResult = {
  encode(
    message: ExamSessionStatQueryResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.itemsCount !== 0) {
      writer.uint32(8).int64(message.itemsCount);
    }
    if (message.sectionUniqueId !== "") {
      writer.uint32(18).string(message.sectionUniqueId);
    }
    if (message.sessionUniqueId !== "") {
      writer.uint32(50).string(message.sessionUniqueId);
    }
    if (message.examUniqueId !== "") {
      writer.uint32(58).string(message.examUniqueId);
    }
    if (message.examTitle !== "") {
      writer.uint32(66).string(message.examTitle);
    }
    if (message.sectionTitle !== "") {
      writer.uint32(26).string(message.sectionTitle);
    }
    if (message.statGroup !== "") {
      writer.uint32(34).string(message.statGroup);
    }
    if (message.uniqueGroupIdentifier !== "") {
      writer.uint32(42).string(message.uniqueGroupIdentifier);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExamSessionStatQueryResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSessionStatQueryResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemsCount = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.sectionUniqueId = reader.string();
          break;
        case 6:
          message.sessionUniqueId = reader.string();
          break;
        case 7:
          message.examUniqueId = reader.string();
          break;
        case 8:
          message.examTitle = reader.string();
          break;
        case 3:
          message.sectionTitle = reader.string();
          break;
        case 4:
          message.statGroup = reader.string();
          break;
        case 5:
          message.uniqueGroupIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamSessionStatQueryResult {
    return {
      itemsCount: isSet(object.itemsCount) ? Number(object.itemsCount) : 0,
      sectionUniqueId: isSet(object.sectionUniqueId)
        ? String(object.sectionUniqueId)
        : "",
      sessionUniqueId: isSet(object.sessionUniqueId)
        ? String(object.sessionUniqueId)
        : "",
      examUniqueId: isSet(object.examUniqueId)
        ? String(object.examUniqueId)
        : "",
      examTitle: isSet(object.examTitle) ? String(object.examTitle) : "",
      sectionTitle: isSet(object.sectionTitle)
        ? String(object.sectionTitle)
        : "",
      statGroup: isSet(object.statGroup) ? String(object.statGroup) : "",
      uniqueGroupIdentifier: isSet(object.uniqueGroupIdentifier)
        ? String(object.uniqueGroupIdentifier)
        : "",
    };
  },

  toJSON(message: ExamSessionStatQueryResult): unknown {
    const obj: any = {};
    message.itemsCount !== undefined &&
      (obj.itemsCount = Math.round(message.itemsCount));
    message.sectionUniqueId !== undefined &&
      (obj.sectionUniqueId = message.sectionUniqueId);
    message.sessionUniqueId !== undefined &&
      (obj.sessionUniqueId = message.sessionUniqueId);
    message.examUniqueId !== undefined &&
      (obj.examUniqueId = message.examUniqueId);
    message.examTitle !== undefined && (obj.examTitle = message.examTitle);
    message.sectionTitle !== undefined &&
      (obj.sectionTitle = message.sectionTitle);
    message.statGroup !== undefined && (obj.statGroup = message.statGroup);
    message.uniqueGroupIdentifier !== undefined &&
      (obj.uniqueGroupIdentifier = message.uniqueGroupIdentifier);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamSessionStatQueryResult>, I>>(
    base?: I
  ): ExamSessionStatQueryResult {
    return ExamSessionStatQueryResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamSessionStatQueryResult>, I>>(
    object: I
  ): ExamSessionStatQueryResult {
    const message = createBaseExamSessionStatQueryResult();
    message.itemsCount = object.itemsCount ?? 0;
    message.sectionUniqueId = object.sectionUniqueId ?? "";
    message.sessionUniqueId = object.sessionUniqueId ?? "";
    message.examUniqueId = object.examUniqueId ?? "";
    message.examTitle = object.examTitle ?? "";
    message.sectionTitle = object.sectionTitle ?? "";
    message.statGroup = object.statGroup ?? "";
    message.uniqueGroupIdentifier = object.uniqueGroupIdentifier ?? "";
    return message;
  },
};

function createBaseCommonCEFRSectionProgressDto(): CommonCEFRSectionProgressDto {
  return {
    listenningTotalQuestions: 0,
    listenningAnsweredQuestions: 0,
    grammarTotalQuestions: 0,
    grammarAnsweredQuestions: 0,
    writingTotalQuestions: 0,
    writingAnsweredQuestions: 0,
    readingTotalQuestions: 0,
    readingAnsweredQuestions: 0,
    speakingTotalQuestions: 0,
    speakingAnsweredQuestions: 0,
    listeningProgress: 0,
    grammarProgress: 0,
    writingProgress: 0,
    readingProgress: 0,
    speakingProgress: 0,
    examUniqueId: "",
    listeningProgressString: "",
    grammarProgressString: "",
    writingProgressString: "",
    readingProgressString: "",
    speakingProgressString: "",
    sessionUniqueId: "",
    examTitle: "",
  };
}

export const CommonCEFRSectionProgressDto = {
  encode(
    message: CommonCEFRSectionProgressDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.listenningTotalQuestions !== 0) {
      writer.uint32(8).int64(message.listenningTotalQuestions);
    }
    if (message.listenningAnsweredQuestions !== 0) {
      writer.uint32(16).int64(message.listenningAnsweredQuestions);
    }
    if (message.grammarTotalQuestions !== 0) {
      writer.uint32(24).int64(message.grammarTotalQuestions);
    }
    if (message.grammarAnsweredQuestions !== 0) {
      writer.uint32(32).int64(message.grammarAnsweredQuestions);
    }
    if (message.writingTotalQuestions !== 0) {
      writer.uint32(40).int64(message.writingTotalQuestions);
    }
    if (message.writingAnsweredQuestions !== 0) {
      writer.uint32(48).int64(message.writingAnsweredQuestions);
    }
    if (message.readingTotalQuestions !== 0) {
      writer.uint32(56).int64(message.readingTotalQuestions);
    }
    if (message.readingAnsweredQuestions !== 0) {
      writer.uint32(64).int64(message.readingAnsweredQuestions);
    }
    if (message.speakingTotalQuestions !== 0) {
      writer.uint32(72).int64(message.speakingTotalQuestions);
    }
    if (message.speakingAnsweredQuestions !== 0) {
      writer.uint32(80).int64(message.speakingAnsweredQuestions);
    }
    if (message.listeningProgress !== 0) {
      writer.uint32(89).double(message.listeningProgress);
    }
    if (message.grammarProgress !== 0) {
      writer.uint32(97).double(message.grammarProgress);
    }
    if (message.writingProgress !== 0) {
      writer.uint32(105).double(message.writingProgress);
    }
    if (message.readingProgress !== 0) {
      writer.uint32(113).double(message.readingProgress);
    }
    if (message.speakingProgress !== 0) {
      writer.uint32(121).double(message.speakingProgress);
    }
    if (message.examUniqueId !== "") {
      writer.uint32(130).string(message.examUniqueId);
    }
    if (message.listeningProgressString !== "") {
      writer.uint32(146).string(message.listeningProgressString);
    }
    if (message.grammarProgressString !== "") {
      writer.uint32(154).string(message.grammarProgressString);
    }
    if (message.writingProgressString !== "") {
      writer.uint32(162).string(message.writingProgressString);
    }
    if (message.readingProgressString !== "") {
      writer.uint32(170).string(message.readingProgressString);
    }
    if (message.speakingProgressString !== "") {
      writer.uint32(178).string(message.speakingProgressString);
    }
    if (message.sessionUniqueId !== "") {
      writer.uint32(138).string(message.sessionUniqueId);
    }
    if (message.examTitle !== "") {
      writer.uint32(186).string(message.examTitle);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommonCEFRSectionProgressDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommonCEFRSectionProgressDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listenningTotalQuestions = longToNumber(
            reader.int64() as Long
          );
          break;
        case 2:
          message.listenningAnsweredQuestions = longToNumber(
            reader.int64() as Long
          );
          break;
        case 3:
          message.grammarTotalQuestions = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.grammarAnsweredQuestions = longToNumber(
            reader.int64() as Long
          );
          break;
        case 5:
          message.writingTotalQuestions = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.writingAnsweredQuestions = longToNumber(
            reader.int64() as Long
          );
          break;
        case 7:
          message.readingTotalQuestions = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.readingAnsweredQuestions = longToNumber(
            reader.int64() as Long
          );
          break;
        case 9:
          message.speakingTotalQuestions = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.speakingAnsweredQuestions = longToNumber(
            reader.int64() as Long
          );
          break;
        case 11:
          message.listeningProgress = reader.double();
          break;
        case 12:
          message.grammarProgress = reader.double();
          break;
        case 13:
          message.writingProgress = reader.double();
          break;
        case 14:
          message.readingProgress = reader.double();
          break;
        case 15:
          message.speakingProgress = reader.double();
          break;
        case 16:
          message.examUniqueId = reader.string();
          break;
        case 18:
          message.listeningProgressString = reader.string();
          break;
        case 19:
          message.grammarProgressString = reader.string();
          break;
        case 20:
          message.writingProgressString = reader.string();
          break;
        case 21:
          message.readingProgressString = reader.string();
          break;
        case 22:
          message.speakingProgressString = reader.string();
          break;
        case 17:
          message.sessionUniqueId = reader.string();
          break;
        case 23:
          message.examTitle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommonCEFRSectionProgressDto {
    return {
      listenningTotalQuestions: isSet(object.listenningTotalQuestions)
        ? Number(object.listenningTotalQuestions)
        : 0,
      listenningAnsweredQuestions: isSet(object.listenningAnsweredQuestions)
        ? Number(object.listenningAnsweredQuestions)
        : 0,
      grammarTotalQuestions: isSet(object.grammarTotalQuestions)
        ? Number(object.grammarTotalQuestions)
        : 0,
      grammarAnsweredQuestions: isSet(object.grammarAnsweredQuestions)
        ? Number(object.grammarAnsweredQuestions)
        : 0,
      writingTotalQuestions: isSet(object.writingTotalQuestions)
        ? Number(object.writingTotalQuestions)
        : 0,
      writingAnsweredQuestions: isSet(object.writingAnsweredQuestions)
        ? Number(object.writingAnsweredQuestions)
        : 0,
      readingTotalQuestions: isSet(object.readingTotalQuestions)
        ? Number(object.readingTotalQuestions)
        : 0,
      readingAnsweredQuestions: isSet(object.readingAnsweredQuestions)
        ? Number(object.readingAnsweredQuestions)
        : 0,
      speakingTotalQuestions: isSet(object.speakingTotalQuestions)
        ? Number(object.speakingTotalQuestions)
        : 0,
      speakingAnsweredQuestions: isSet(object.speakingAnsweredQuestions)
        ? Number(object.speakingAnsweredQuestions)
        : 0,
      listeningProgress: isSet(object.listeningProgress)
        ? Number(object.listeningProgress)
        : 0,
      grammarProgress: isSet(object.grammarProgress)
        ? Number(object.grammarProgress)
        : 0,
      writingProgress: isSet(object.writingProgress)
        ? Number(object.writingProgress)
        : 0,
      readingProgress: isSet(object.readingProgress)
        ? Number(object.readingProgress)
        : 0,
      speakingProgress: isSet(object.speakingProgress)
        ? Number(object.speakingProgress)
        : 0,
      examUniqueId: isSet(object.examUniqueId)
        ? String(object.examUniqueId)
        : "",
      listeningProgressString: isSet(object.listeningProgressString)
        ? String(object.listeningProgressString)
        : "",
      grammarProgressString: isSet(object.grammarProgressString)
        ? String(object.grammarProgressString)
        : "",
      writingProgressString: isSet(object.writingProgressString)
        ? String(object.writingProgressString)
        : "",
      readingProgressString: isSet(object.readingProgressString)
        ? String(object.readingProgressString)
        : "",
      speakingProgressString: isSet(object.speakingProgressString)
        ? String(object.speakingProgressString)
        : "",
      sessionUniqueId: isSet(object.sessionUniqueId)
        ? String(object.sessionUniqueId)
        : "",
      examTitle: isSet(object.examTitle) ? String(object.examTitle) : "",
    };
  },

  toJSON(message: CommonCEFRSectionProgressDto): unknown {
    const obj: any = {};
    message.listenningTotalQuestions !== undefined &&
      (obj.listenningTotalQuestions = Math.round(
        message.listenningTotalQuestions
      ));
    message.listenningAnsweredQuestions !== undefined &&
      (obj.listenningAnsweredQuestions = Math.round(
        message.listenningAnsweredQuestions
      ));
    message.grammarTotalQuestions !== undefined &&
      (obj.grammarTotalQuestions = Math.round(message.grammarTotalQuestions));
    message.grammarAnsweredQuestions !== undefined &&
      (obj.grammarAnsweredQuestions = Math.round(
        message.grammarAnsweredQuestions
      ));
    message.writingTotalQuestions !== undefined &&
      (obj.writingTotalQuestions = Math.round(message.writingTotalQuestions));
    message.writingAnsweredQuestions !== undefined &&
      (obj.writingAnsweredQuestions = Math.round(
        message.writingAnsweredQuestions
      ));
    message.readingTotalQuestions !== undefined &&
      (obj.readingTotalQuestions = Math.round(message.readingTotalQuestions));
    message.readingAnsweredQuestions !== undefined &&
      (obj.readingAnsweredQuestions = Math.round(
        message.readingAnsweredQuestions
      ));
    message.speakingTotalQuestions !== undefined &&
      (obj.speakingTotalQuestions = Math.round(message.speakingTotalQuestions));
    message.speakingAnsweredQuestions !== undefined &&
      (obj.speakingAnsweredQuestions = Math.round(
        message.speakingAnsweredQuestions
      ));
    message.listeningProgress !== undefined &&
      (obj.listeningProgress = message.listeningProgress);
    message.grammarProgress !== undefined &&
      (obj.grammarProgress = message.grammarProgress);
    message.writingProgress !== undefined &&
      (obj.writingProgress = message.writingProgress);
    message.readingProgress !== undefined &&
      (obj.readingProgress = message.readingProgress);
    message.speakingProgress !== undefined &&
      (obj.speakingProgress = message.speakingProgress);
    message.examUniqueId !== undefined &&
      (obj.examUniqueId = message.examUniqueId);
    message.listeningProgressString !== undefined &&
      (obj.listeningProgressString = message.listeningProgressString);
    message.grammarProgressString !== undefined &&
      (obj.grammarProgressString = message.grammarProgressString);
    message.writingProgressString !== undefined &&
      (obj.writingProgressString = message.writingProgressString);
    message.readingProgressString !== undefined &&
      (obj.readingProgressString = message.readingProgressString);
    message.speakingProgressString !== undefined &&
      (obj.speakingProgressString = message.speakingProgressString);
    message.sessionUniqueId !== undefined &&
      (obj.sessionUniqueId = message.sessionUniqueId);
    message.examTitle !== undefined && (obj.examTitle = message.examTitle);
    return obj;
  },

  create<I extends Exact<DeepPartial<CommonCEFRSectionProgressDto>, I>>(
    base?: I
  ): CommonCEFRSectionProgressDto {
    return CommonCEFRSectionProgressDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommonCEFRSectionProgressDto>, I>>(
    object: I
  ): CommonCEFRSectionProgressDto {
    const message = createBaseCommonCEFRSectionProgressDto();
    message.listenningTotalQuestions = object.listenningTotalQuestions ?? 0;
    message.listenningAnsweredQuestions =
      object.listenningAnsweredQuestions ?? 0;
    message.grammarTotalQuestions = object.grammarTotalQuestions ?? 0;
    message.grammarAnsweredQuestions = object.grammarAnsweredQuestions ?? 0;
    message.writingTotalQuestions = object.writingTotalQuestions ?? 0;
    message.writingAnsweredQuestions = object.writingAnsweredQuestions ?? 0;
    message.readingTotalQuestions = object.readingTotalQuestions ?? 0;
    message.readingAnsweredQuestions = object.readingAnsweredQuestions ?? 0;
    message.speakingTotalQuestions = object.speakingTotalQuestions ?? 0;
    message.speakingAnsweredQuestions = object.speakingAnsweredQuestions ?? 0;
    message.listeningProgress = object.listeningProgress ?? 0;
    message.grammarProgress = object.grammarProgress ?? 0;
    message.writingProgress = object.writingProgress ?? 0;
    message.readingProgress = object.readingProgress ?? 0;
    message.speakingProgress = object.speakingProgress ?? 0;
    message.examUniqueId = object.examUniqueId ?? "";
    message.listeningProgressString = object.listeningProgressString ?? "";
    message.grammarProgressString = object.grammarProgressString ?? "";
    message.writingProgressString = object.writingProgressString ?? "";
    message.readingProgressString = object.readingProgressString ?? "";
    message.speakingProgressString = object.speakingProgressString ?? "";
    message.sessionUniqueId = object.sessionUniqueId ?? "";
    message.examTitle = object.examTitle ?? "";
    return message;
  },
};

function createBaseExamSessionReviewCreateReply(): ExamSessionReviewCreateReply {
  return { data: undefined, error: undefined };
}

export const ExamSessionReviewCreateReply = {
  encode(
    message: ExamSessionReviewCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ExamSessionReviewEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExamSessionReviewCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSessionReviewCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ExamSessionReviewEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamSessionReviewCreateReply {
    return {
      data: isSet(object.data)
        ? ExamSessionReviewEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ExamSessionReviewCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ExamSessionReviewEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamSessionReviewCreateReply>, I>>(
    base?: I
  ): ExamSessionReviewCreateReply {
    return ExamSessionReviewCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamSessionReviewCreateReply>, I>>(
    object: I
  ): ExamSessionReviewCreateReply {
    const message = createBaseExamSessionReviewCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ExamSessionReviewEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseExamSessionReviewReply(): ExamSessionReviewReply {
  return { data: undefined, error: undefined };
}

export const ExamSessionReviewReply = {
  encode(
    message: ExamSessionReviewReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ExamSessionReviewEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExamSessionReviewReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSessionReviewReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ExamSessionReviewEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamSessionReviewReply {
    return {
      data: isSet(object.data)
        ? ExamSessionReviewEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ExamSessionReviewReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ExamSessionReviewEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamSessionReviewReply>, I>>(
    base?: I
  ): ExamSessionReviewReply {
    return ExamSessionReviewReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamSessionReviewReply>, I>>(
    object: I
  ): ExamSessionReviewReply {
    const message = createBaseExamSessionReviewReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ExamSessionReviewEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseExamSessionReviewQueryReply(): ExamSessionReviewQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ExamSessionReviewQueryReply = {
  encode(
    message: ExamSessionReviewQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ExamSessionReviewEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExamSessionReviewQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSessionReviewQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ExamSessionReviewEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamSessionReviewQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ExamSessionReviewEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ExamSessionReviewQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ExamSessionReviewEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamSessionReviewQueryReply>, I>>(
    base?: I
  ): ExamSessionReviewQueryReply {
    return ExamSessionReviewQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamSessionReviewQueryReply>, I>>(
    object: I
  ): ExamSessionReviewQueryReply {
    const message = createBaseExamSessionReviewQueryReply();
    message.items =
      object.items?.map((e) => ExamSessionReviewEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseExamSessionReviewEntity(): ExamSessionReviewEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    choiceId: undefined,
    choice: undefined,
    accepted: undefined,
    sessionId: undefined,
    session: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ExamSessionReviewEntity = {
  encode(
    message: ExamSessionReviewEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.choiceId !== undefined) {
      writer.uint32(74).string(message.choiceId);
    }
    if (message.choice !== undefined) {
      ExamSessionResultChoicesEntity.encode(
        message.choice,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.accepted !== undefined) {
      writer.uint32(88).int64(message.accepted);
    }
    if (message.sessionId !== undefined) {
      writer.uint32(106).string(message.sessionId);
    }
    if (message.session !== undefined) {
      ExamSessionEntity.encode(
        message.session,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(120).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(128).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(136).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(146).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(154).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExamSessionReviewEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSessionReviewEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.choiceId = reader.string();
          break;
        case 10:
          message.choice = ExamSessionResultChoicesEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.accepted = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.sessionId = reader.string();
          break;
        case 14:
          message.session = ExamSessionEntity.decode(reader, reader.uint32());
          break;
        case 15:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.createdFormatted = reader.string();
          break;
        case 19:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExamSessionReviewEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      choiceId: isSet(object.choiceId) ? String(object.choiceId) : undefined,
      choice: isSet(object.choice)
        ? ExamSessionResultChoicesEntity.fromJSON(object.choice)
        : undefined,
      accepted: isSet(object.accepted) ? Number(object.accepted) : undefined,
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : undefined,
      session: isSet(object.session)
        ? ExamSessionEntity.fromJSON(object.session)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ExamSessionReviewEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.choiceId !== undefined && (obj.choiceId = message.choiceId);
    message.choice !== undefined &&
      (obj.choice = message.choice
        ? ExamSessionResultChoicesEntity.toJSON(message.choice)
        : undefined);
    message.accepted !== undefined &&
      (obj.accepted = Math.round(message.accepted));
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.session !== undefined &&
      (obj.session = message.session
        ? ExamSessionEntity.toJSON(message.session)
        : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamSessionReviewEntity>, I>>(
    base?: I
  ): ExamSessionReviewEntity {
    return ExamSessionReviewEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExamSessionReviewEntity>, I>>(
    object: I
  ): ExamSessionReviewEntity {
    const message = createBaseExamSessionReviewEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.choiceId = object.choiceId ?? undefined;
    message.choice =
      object.choice !== undefined && object.choice !== null
        ? ExamSessionResultChoicesEntity.fromPartial(object.choice)
        : undefined;
    message.accepted = object.accepted ?? undefined;
    message.sessionId = object.sessionId ?? undefined;
    message.session =
      object.session !== undefined && object.session !== null
        ? ExamSessionEntity.fromPartial(object.session)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseQuestionBankCreateReply(): QuestionBankCreateReply {
  return { data: undefined, error: undefined };
}

export const QuestionBankCreateReply = {
  encode(
    message: QuestionBankCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      QuestionBankEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionBankCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionBankCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = QuestionBankEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionBankCreateReply {
    return {
      data: isSet(object.data)
        ? QuestionBankEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionBankCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? QuestionBankEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionBankCreateReply>, I>>(
    base?: I
  ): QuestionBankCreateReply {
    return QuestionBankCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionBankCreateReply>, I>>(
    object: I
  ): QuestionBankCreateReply {
    const message = createBaseQuestionBankCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? QuestionBankEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionBankReply(): QuestionBankReply {
  return { data: undefined, error: undefined };
}

export const QuestionBankReply = {
  encode(
    message: QuestionBankReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      QuestionBankEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestionBankReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionBankReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = QuestionBankEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionBankReply {
    return {
      data: isSet(object.data)
        ? QuestionBankEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionBankReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? QuestionBankEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionBankReply>, I>>(
    base?: I
  ): QuestionBankReply {
    return QuestionBankReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionBankReply>, I>>(
    object: I
  ): QuestionBankReply {
    const message = createBaseQuestionBankReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? QuestionBankEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionBankQueryReply(): QuestionBankQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const QuestionBankQueryReply = {
  encode(
    message: QuestionBankQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      QuestionBankEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionBankQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionBankQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            QuestionBankEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionBankQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => QuestionBankEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionBankQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? QuestionBankEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionBankQueryReply>, I>>(
    base?: I
  ): QuestionBankQueryReply {
    return QuestionBankQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionBankQueryReply>, I>>(
    object: I
  ): QuestionBankQueryReply {
    const message = createBaseQuestionBankQueryReply();
    message.items =
      object.items?.map((e) => QuestionBankEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionBankEntity(): QuestionBankEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    title: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const QuestionBankEntity = {
  encode(
    message: QuestionBankEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      QuestionBankEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.title !== undefined) {
      writer.uint32(74).string(message.title);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestionBankEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionBankEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            QuestionBankEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.title = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionBankEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            QuestionBankEntityPolyglot.fromJSON(e)
          )
        : [],
      title: isSet(object.title) ? String(object.title) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: QuestionBankEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? QuestionBankEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.title !== undefined && (obj.title = message.title);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionBankEntity>, I>>(
    base?: I
  ): QuestionBankEntity {
    return QuestionBankEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionBankEntity>, I>>(
    object: I
  ): QuestionBankEntity {
    const message = createBaseQuestionBankEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        QuestionBankEntityPolyglot.fromPartial(e)
      ) || [];
    message.title = object.title ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseQuestionBankEntityPolyglot(): QuestionBankEntityPolyglot {
  return { linkerId: "", languageId: "", title: "" };
}

export const QuestionBankEntityPolyglot = {
  encode(
    message: QuestionBankEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionBankEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionBankEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionBankEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      title: isSet(object.title) ? String(object.title) : "",
    };
  },

  toJSON(message: QuestionBankEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionBankEntityPolyglot>, I>>(
    base?: I
  ): QuestionBankEntityPolyglot {
    return QuestionBankEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionBankEntityPolyglot>, I>>(
    object: I
  ): QuestionBankEntityPolyglot {
    const message = createBaseQuestionBankEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseQuestionCreateReply(): QuestionCreateReply {
  return { data: undefined, error: undefined };
}

export const QuestionCreateReply = {
  encode(
    message: QuestionCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      QuestionEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestionCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = QuestionEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionCreateReply {
    return {
      data: isSet(object.data)
        ? QuestionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? QuestionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionCreateReply>, I>>(
    base?: I
  ): QuestionCreateReply {
    return QuestionCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionCreateReply>, I>>(
    object: I
  ): QuestionCreateReply {
    const message = createBaseQuestionCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? QuestionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionReply(): QuestionReply {
  return { data: undefined, error: undefined };
}

export const QuestionReply = {
  encode(
    message: QuestionReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      QuestionEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestionReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = QuestionEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionReply {
    return {
      data: isSet(object.data)
        ? QuestionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? QuestionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionReply>, I>>(
    base?: I
  ): QuestionReply {
    return QuestionReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionReply>, I>>(
    object: I
  ): QuestionReply {
    const message = createBaseQuestionReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? QuestionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionQueryReply(): QuestionQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const QuestionQueryReply = {
  encode(
    message: QuestionQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      QuestionEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestionQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(QuestionEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => QuestionEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? QuestionEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionQueryReply>, I>>(
    base?: I
  ): QuestionQueryReply {
    return QuestionQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionQueryReply>, I>>(
    object: I
  ): QuestionQueryReply {
    const message = createBaseQuestionQueryReply();
    message.items =
      object.items?.map((e) => QuestionEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionEntity(): QuestionEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    bankId: undefined,
    bank: undefined,
    wordCount: undefined,
    isPreview: undefined,
    durationInSeconds: undefined,
    isCorrect: undefined,
    title: undefined,
    titleExcerpt: undefined,
    body: undefined,
    bodyExcerpt: undefined,
    provincesListId: [],
    provinces: [],
    questionLevelId: undefined,
    questionLevel: undefined,
    studyYearId: undefined,
    studyYear: undefined,
    schoolTypeId: undefined,
    schoolType: undefined,
    questionSemesterId: undefined,
    questionSemester: undefined,
    questionDifficulityLevelId: undefined,
    questionDifficulityLevel: undefined,
    choices: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const QuestionEntity = {
  encode(
    message: QuestionEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.bankId !== undefined) {
      writer.uint32(74).string(message.bankId);
    }
    if (message.bank !== undefined) {
      QuestionBankEntity.encode(
        message.bank,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.wordCount !== undefined) {
      writer.uint32(88).int64(message.wordCount);
    }
    if (message.isPreview !== undefined) {
      writer.uint32(96).int64(message.isPreview);
    }
    if (message.durationInSeconds !== undefined) {
      writer.uint32(104).int64(message.durationInSeconds);
    }
    if (message.isCorrect !== undefined) {
      writer.uint32(112).int64(message.isCorrect);
    }
    if (message.title !== undefined) {
      writer.uint32(122).string(message.title);
    }
    if (message.titleExcerpt !== undefined) {
      writer.uint32(130).string(message.titleExcerpt);
    }
    if (message.body !== undefined) {
      writer.uint32(138).string(message.body);
    }
    if (message.bodyExcerpt !== undefined) {
      writer.uint32(146).string(message.bodyExcerpt);
    }
    for (const v of message.provincesListId) {
      writer.uint32(162).string(v!);
    }
    for (const v of message.provinces) {
      GeoProvinceEntity.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.questionLevelId !== undefined) {
      writer.uint32(186).string(message.questionLevelId);
    }
    if (message.questionLevel !== undefined) {
      QuestionLevelEntity.encode(
        message.questionLevel,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.studyYearId !== undefined) {
      writer.uint32(210).string(message.studyYearId);
    }
    if (message.studyYear !== undefined) {
      StudyYearEntity.encode(
        message.studyYear,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.schoolTypeId !== undefined) {
      writer.uint32(234).string(message.schoolTypeId);
    }
    if (message.schoolType !== undefined) {
      SchoolTypeEntity.encode(
        message.schoolType,
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.questionSemesterId !== undefined) {
      writer.uint32(258).string(message.questionSemesterId);
    }
    if (message.questionSemester !== undefined) {
      QuestionSemesterEntity.encode(
        message.questionSemester,
        writer.uint32(266).fork()
      ).ldelim();
    }
    if (message.questionDifficulityLevelId !== undefined) {
      writer.uint32(282).string(message.questionDifficulityLevelId);
    }
    if (message.questionDifficulityLevel !== undefined) {
      QuestionDifficulityLevelEntity.encode(
        message.questionDifficulityLevel,
        writer.uint32(290).fork()
      ).ldelim();
    }
    for (const v of message.choices) {
      QuestionChoicesEntity.encode(v!, writer.uint32(298).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(304).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(312).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(320).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(330).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(338).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestionEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.bankId = reader.string();
          break;
        case 10:
          message.bank = QuestionBankEntity.decode(reader, reader.uint32());
          break;
        case 11:
          message.wordCount = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.isPreview = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.durationInSeconds = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.isCorrect = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.title = reader.string();
          break;
        case 16:
          message.titleExcerpt = reader.string();
          break;
        case 17:
          message.body = reader.string();
          break;
        case 18:
          message.bodyExcerpt = reader.string();
          break;
        case 20:
          message.provincesListId.push(reader.string());
          break;
        case 21:
          message.provinces.push(
            GeoProvinceEntity.decode(reader, reader.uint32())
          );
          break;
        case 23:
          message.questionLevelId = reader.string();
          break;
        case 24:
          message.questionLevel = QuestionLevelEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 26:
          message.studyYearId = reader.string();
          break;
        case 27:
          message.studyYear = StudyYearEntity.decode(reader, reader.uint32());
          break;
        case 29:
          message.schoolTypeId = reader.string();
          break;
        case 30:
          message.schoolType = SchoolTypeEntity.decode(reader, reader.uint32());
          break;
        case 32:
          message.questionSemesterId = reader.string();
          break;
        case 33:
          message.questionSemester = QuestionSemesterEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 35:
          message.questionDifficulityLevelId = reader.string();
          break;
        case 36:
          message.questionDifficulityLevel =
            QuestionDifficulityLevelEntity.decode(reader, reader.uint32());
          break;
        case 37:
          message.choices.push(
            QuestionChoicesEntity.decode(reader, reader.uint32())
          );
          break;
        case 38:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 39:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 40:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 41:
          message.createdFormatted = reader.string();
          break;
        case 42:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      bankId: isSet(object.bankId) ? String(object.bankId) : undefined,
      bank: isSet(object.bank)
        ? QuestionBankEntity.fromJSON(object.bank)
        : undefined,
      wordCount: isSet(object.wordCount) ? Number(object.wordCount) : undefined,
      isPreview: isSet(object.isPreview) ? Number(object.isPreview) : undefined,
      durationInSeconds: isSet(object.durationInSeconds)
        ? Number(object.durationInSeconds)
        : undefined,
      isCorrect: isSet(object.isCorrect) ? Number(object.isCorrect) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      titleExcerpt: isSet(object.titleExcerpt)
        ? String(object.titleExcerpt)
        : undefined,
      body: isSet(object.body) ? String(object.body) : undefined,
      bodyExcerpt: isSet(object.bodyExcerpt)
        ? String(object.bodyExcerpt)
        : undefined,
      provincesListId: Array.isArray(object?.provincesListId)
        ? object.provincesListId.map((e: any) => String(e))
        : [],
      provinces: Array.isArray(object?.provinces)
        ? object.provinces.map((e: any) => GeoProvinceEntity.fromJSON(e))
        : [],
      questionLevelId: isSet(object.questionLevelId)
        ? String(object.questionLevelId)
        : undefined,
      questionLevel: isSet(object.questionLevel)
        ? QuestionLevelEntity.fromJSON(object.questionLevel)
        : undefined,
      studyYearId: isSet(object.studyYearId)
        ? String(object.studyYearId)
        : undefined,
      studyYear: isSet(object.studyYear)
        ? StudyYearEntity.fromJSON(object.studyYear)
        : undefined,
      schoolTypeId: isSet(object.schoolTypeId)
        ? String(object.schoolTypeId)
        : undefined,
      schoolType: isSet(object.schoolType)
        ? SchoolTypeEntity.fromJSON(object.schoolType)
        : undefined,
      questionSemesterId: isSet(object.questionSemesterId)
        ? String(object.questionSemesterId)
        : undefined,
      questionSemester: isSet(object.questionSemester)
        ? QuestionSemesterEntity.fromJSON(object.questionSemester)
        : undefined,
      questionDifficulityLevelId: isSet(object.questionDifficulityLevelId)
        ? String(object.questionDifficulityLevelId)
        : undefined,
      questionDifficulityLevel: isSet(object.questionDifficulityLevel)
        ? QuestionDifficulityLevelEntity.fromJSON(
            object.questionDifficulityLevel
          )
        : undefined,
      choices: Array.isArray(object?.choices)
        ? object.choices.map((e: any) => QuestionChoicesEntity.fromJSON(e))
        : [],
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: QuestionEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.bankId !== undefined && (obj.bankId = message.bankId);
    message.bank !== undefined &&
      (obj.bank = message.bank
        ? QuestionBankEntity.toJSON(message.bank)
        : undefined);
    message.wordCount !== undefined &&
      (obj.wordCount = Math.round(message.wordCount));
    message.isPreview !== undefined &&
      (obj.isPreview = Math.round(message.isPreview));
    message.durationInSeconds !== undefined &&
      (obj.durationInSeconds = Math.round(message.durationInSeconds));
    message.isCorrect !== undefined &&
      (obj.isCorrect = Math.round(message.isCorrect));
    message.title !== undefined && (obj.title = message.title);
    message.titleExcerpt !== undefined &&
      (obj.titleExcerpt = message.titleExcerpt);
    message.body !== undefined && (obj.body = message.body);
    message.bodyExcerpt !== undefined &&
      (obj.bodyExcerpt = message.bodyExcerpt);
    if (message.provincesListId) {
      obj.provincesListId = message.provincesListId.map((e) => e);
    } else {
      obj.provincesListId = [];
    }
    if (message.provinces) {
      obj.provinces = message.provinces.map((e) =>
        e ? GeoProvinceEntity.toJSON(e) : undefined
      );
    } else {
      obj.provinces = [];
    }
    message.questionLevelId !== undefined &&
      (obj.questionLevelId = message.questionLevelId);
    message.questionLevel !== undefined &&
      (obj.questionLevel = message.questionLevel
        ? QuestionLevelEntity.toJSON(message.questionLevel)
        : undefined);
    message.studyYearId !== undefined &&
      (obj.studyYearId = message.studyYearId);
    message.studyYear !== undefined &&
      (obj.studyYear = message.studyYear
        ? StudyYearEntity.toJSON(message.studyYear)
        : undefined);
    message.schoolTypeId !== undefined &&
      (obj.schoolTypeId = message.schoolTypeId);
    message.schoolType !== undefined &&
      (obj.schoolType = message.schoolType
        ? SchoolTypeEntity.toJSON(message.schoolType)
        : undefined);
    message.questionSemesterId !== undefined &&
      (obj.questionSemesterId = message.questionSemesterId);
    message.questionSemester !== undefined &&
      (obj.questionSemester = message.questionSemester
        ? QuestionSemesterEntity.toJSON(message.questionSemester)
        : undefined);
    message.questionDifficulityLevelId !== undefined &&
      (obj.questionDifficulityLevelId = message.questionDifficulityLevelId);
    message.questionDifficulityLevel !== undefined &&
      (obj.questionDifficulityLevel = message.questionDifficulityLevel
        ? QuestionDifficulityLevelEntity.toJSON(
            message.questionDifficulityLevel
          )
        : undefined);
    if (message.choices) {
      obj.choices = message.choices.map((e) =>
        e ? QuestionChoicesEntity.toJSON(e) : undefined
      );
    } else {
      obj.choices = [];
    }
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionEntity>, I>>(
    base?: I
  ): QuestionEntity {
    return QuestionEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionEntity>, I>>(
    object: I
  ): QuestionEntity {
    const message = createBaseQuestionEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.bankId = object.bankId ?? undefined;
    message.bank =
      object.bank !== undefined && object.bank !== null
        ? QuestionBankEntity.fromPartial(object.bank)
        : undefined;
    message.wordCount = object.wordCount ?? undefined;
    message.isPreview = object.isPreview ?? undefined;
    message.durationInSeconds = object.durationInSeconds ?? undefined;
    message.isCorrect = object.isCorrect ?? undefined;
    message.title = object.title ?? undefined;
    message.titleExcerpt = object.titleExcerpt ?? undefined;
    message.body = object.body ?? undefined;
    message.bodyExcerpt = object.bodyExcerpt ?? undefined;
    message.provincesListId = object.provincesListId?.map((e) => e) || [];
    message.provinces =
      object.provinces?.map((e) => GeoProvinceEntity.fromPartial(e)) || [];
    message.questionLevelId = object.questionLevelId ?? undefined;
    message.questionLevel =
      object.questionLevel !== undefined && object.questionLevel !== null
        ? QuestionLevelEntity.fromPartial(object.questionLevel)
        : undefined;
    message.studyYearId = object.studyYearId ?? undefined;
    message.studyYear =
      object.studyYear !== undefined && object.studyYear !== null
        ? StudyYearEntity.fromPartial(object.studyYear)
        : undefined;
    message.schoolTypeId = object.schoolTypeId ?? undefined;
    message.schoolType =
      object.schoolType !== undefined && object.schoolType !== null
        ? SchoolTypeEntity.fromPartial(object.schoolType)
        : undefined;
    message.questionSemesterId = object.questionSemesterId ?? undefined;
    message.questionSemester =
      object.questionSemester !== undefined && object.questionSemester !== null
        ? QuestionSemesterEntity.fromPartial(object.questionSemester)
        : undefined;
    message.questionDifficulityLevelId =
      object.questionDifficulityLevelId ?? undefined;
    message.questionDifficulityLevel =
      object.questionDifficulityLevel !== undefined &&
      object.questionDifficulityLevel !== null
        ? QuestionDifficulityLevelEntity.fromPartial(
            object.questionDifficulityLevel
          )
        : undefined;
    message.choices =
      object.choices?.map((e) => QuestionChoicesEntity.fromPartial(e)) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseQuestionChoicesEntity(): QuestionChoicesEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    content: undefined,
    contentExcerpt: undefined,
    correctAnswer: undefined,
    isCorrect: undefined,
    isPreview: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const QuestionChoicesEntity = {
  encode(
    message: QuestionChoicesEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.content !== undefined) {
      writer.uint32(66).string(message.content);
    }
    if (message.contentExcerpt !== undefined) {
      writer.uint32(74).string(message.contentExcerpt);
    }
    if (message.correctAnswer !== undefined) {
      writer.uint32(82).string(message.correctAnswer);
    }
    if (message.isCorrect !== undefined) {
      writer.uint32(88).int64(message.isCorrect);
    }
    if (message.isPreview !== undefined) {
      writer.uint32(96).int64(message.isPreview);
    }
    if (message.rank !== 0) {
      writer.uint32(104).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(112).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(120).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(130).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(138).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionChoicesEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionChoicesEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.content = reader.string();
          break;
        case 9:
          message.contentExcerpt = reader.string();
          break;
        case 10:
          message.correctAnswer = reader.string();
          break;
        case 11:
          message.isCorrect = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.isPreview = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.createdFormatted = reader.string();
          break;
        case 17:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionChoicesEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      content: isSet(object.content) ? String(object.content) : undefined,
      contentExcerpt: isSet(object.contentExcerpt)
        ? String(object.contentExcerpt)
        : undefined,
      correctAnswer: isSet(object.correctAnswer)
        ? String(object.correctAnswer)
        : undefined,
      isCorrect: isSet(object.isCorrect) ? Number(object.isCorrect) : undefined,
      isPreview: isSet(object.isPreview) ? Number(object.isPreview) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: QuestionChoicesEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.content !== undefined && (obj.content = message.content);
    message.contentExcerpt !== undefined &&
      (obj.contentExcerpt = message.contentExcerpt);
    message.correctAnswer !== undefined &&
      (obj.correctAnswer = message.correctAnswer);
    message.isCorrect !== undefined &&
      (obj.isCorrect = Math.round(message.isCorrect));
    message.isPreview !== undefined &&
      (obj.isPreview = Math.round(message.isPreview));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionChoicesEntity>, I>>(
    base?: I
  ): QuestionChoicesEntity {
    return QuestionChoicesEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionChoicesEntity>, I>>(
    object: I
  ): QuestionChoicesEntity {
    const message = createBaseQuestionChoicesEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.content = object.content ?? undefined;
    message.contentExcerpt = object.contentExcerpt ?? undefined;
    message.correctAnswer = object.correctAnswer ?? undefined;
    message.isCorrect = object.isCorrect ?? undefined;
    message.isPreview = object.isPreview ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseQuestionDifficulityLevelCreateReply(): QuestionDifficulityLevelCreateReply {
  return { data: undefined, error: undefined };
}

export const QuestionDifficulityLevelCreateReply = {
  encode(
    message: QuestionDifficulityLevelCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      QuestionDifficulityLevelEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionDifficulityLevelCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionDifficulityLevelCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = QuestionDifficulityLevelEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionDifficulityLevelCreateReply {
    return {
      data: isSet(object.data)
        ? QuestionDifficulityLevelEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionDifficulityLevelCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? QuestionDifficulityLevelEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionDifficulityLevelCreateReply>, I>>(
    base?: I
  ): QuestionDifficulityLevelCreateReply {
    return QuestionDifficulityLevelCreateReply.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<QuestionDifficulityLevelCreateReply>, I>
  >(object: I): QuestionDifficulityLevelCreateReply {
    const message = createBaseQuestionDifficulityLevelCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? QuestionDifficulityLevelEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionDifficulityLevelReply(): QuestionDifficulityLevelReply {
  return { data: undefined, error: undefined };
}

export const QuestionDifficulityLevelReply = {
  encode(
    message: QuestionDifficulityLevelReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      QuestionDifficulityLevelEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionDifficulityLevelReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionDifficulityLevelReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = QuestionDifficulityLevelEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionDifficulityLevelReply {
    return {
      data: isSet(object.data)
        ? QuestionDifficulityLevelEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionDifficulityLevelReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? QuestionDifficulityLevelEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionDifficulityLevelReply>, I>>(
    base?: I
  ): QuestionDifficulityLevelReply {
    return QuestionDifficulityLevelReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionDifficulityLevelReply>, I>>(
    object: I
  ): QuestionDifficulityLevelReply {
    const message = createBaseQuestionDifficulityLevelReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? QuestionDifficulityLevelEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionDifficulityLevelQueryReply(): QuestionDifficulityLevelQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const QuestionDifficulityLevelQueryReply = {
  encode(
    message: QuestionDifficulityLevelQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      QuestionDifficulityLevelEntity.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionDifficulityLevelQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionDifficulityLevelQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            QuestionDifficulityLevelEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionDifficulityLevelQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) =>
            QuestionDifficulityLevelEntity.fromJSON(e)
          )
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionDifficulityLevelQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? QuestionDifficulityLevelEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionDifficulityLevelQueryReply>, I>>(
    base?: I
  ): QuestionDifficulityLevelQueryReply {
    return QuestionDifficulityLevelQueryReply.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<QuestionDifficulityLevelQueryReply>, I>
  >(object: I): QuestionDifficulityLevelQueryReply {
    const message = createBaseQuestionDifficulityLevelQueryReply();
    message.items =
      object.items?.map((e) => QuestionDifficulityLevelEntity.fromPartial(e)) ||
      [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionDifficulityLevelEntity(): QuestionDifficulityLevelEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const QuestionDifficulityLevelEntity = {
  encode(
    message: QuestionDifficulityLevelEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      QuestionDifficulityLevelEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionDifficulityLevelEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionDifficulityLevelEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            QuestionDifficulityLevelEntityPolyglot.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionDifficulityLevelEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            QuestionDifficulityLevelEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: QuestionDifficulityLevelEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? QuestionDifficulityLevelEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionDifficulityLevelEntity>, I>>(
    base?: I
  ): QuestionDifficulityLevelEntity {
    return QuestionDifficulityLevelEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionDifficulityLevelEntity>, I>>(
    object: I
  ): QuestionDifficulityLevelEntity {
    const message = createBaseQuestionDifficulityLevelEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        QuestionDifficulityLevelEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseQuestionDifficulityLevelEntityPolyglot(): QuestionDifficulityLevelEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const QuestionDifficulityLevelEntityPolyglot = {
  encode(
    message: QuestionDifficulityLevelEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionDifficulityLevelEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionDifficulityLevelEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionDifficulityLevelEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: QuestionDifficulityLevelEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<QuestionDifficulityLevelEntityPolyglot>, I>
  >(base?: I): QuestionDifficulityLevelEntityPolyglot {
    return QuestionDifficulityLevelEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<QuestionDifficulityLevelEntityPolyglot>, I>
  >(object: I): QuestionDifficulityLevelEntityPolyglot {
    const message = createBaseQuestionDifficulityLevelEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQuestionLevelCreateReply(): QuestionLevelCreateReply {
  return { data: undefined, error: undefined };
}

export const QuestionLevelCreateReply = {
  encode(
    message: QuestionLevelCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      QuestionLevelEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionLevelCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionLevelCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = QuestionLevelEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionLevelCreateReply {
    return {
      data: isSet(object.data)
        ? QuestionLevelEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionLevelCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? QuestionLevelEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionLevelCreateReply>, I>>(
    base?: I
  ): QuestionLevelCreateReply {
    return QuestionLevelCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionLevelCreateReply>, I>>(
    object: I
  ): QuestionLevelCreateReply {
    const message = createBaseQuestionLevelCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? QuestionLevelEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionLevelReply(): QuestionLevelReply {
  return { data: undefined, error: undefined };
}

export const QuestionLevelReply = {
  encode(
    message: QuestionLevelReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      QuestionLevelEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestionLevelReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionLevelReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = QuestionLevelEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionLevelReply {
    return {
      data: isSet(object.data)
        ? QuestionLevelEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionLevelReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? QuestionLevelEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionLevelReply>, I>>(
    base?: I
  ): QuestionLevelReply {
    return QuestionLevelReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionLevelReply>, I>>(
    object: I
  ): QuestionLevelReply {
    const message = createBaseQuestionLevelReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? QuestionLevelEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionLevelQueryReply(): QuestionLevelQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const QuestionLevelQueryReply = {
  encode(
    message: QuestionLevelQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      QuestionLevelEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionLevelQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionLevelQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            QuestionLevelEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionLevelQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => QuestionLevelEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionLevelQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? QuestionLevelEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionLevelQueryReply>, I>>(
    base?: I
  ): QuestionLevelQueryReply {
    return QuestionLevelQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionLevelQueryReply>, I>>(
    object: I
  ): QuestionLevelQueryReply {
    const message = createBaseQuestionLevelQueryReply();
    message.items =
      object.items?.map((e) => QuestionLevelEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionLevelEntity(): QuestionLevelEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const QuestionLevelEntity = {
  encode(
    message: QuestionLevelEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      QuestionLevelEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestionLevelEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionLevelEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            QuestionLevelEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionLevelEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            QuestionLevelEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: QuestionLevelEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? QuestionLevelEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionLevelEntity>, I>>(
    base?: I
  ): QuestionLevelEntity {
    return QuestionLevelEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionLevelEntity>, I>>(
    object: I
  ): QuestionLevelEntity {
    const message = createBaseQuestionLevelEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        QuestionLevelEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseQuestionLevelEntityPolyglot(): QuestionLevelEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const QuestionLevelEntityPolyglot = {
  encode(
    message: QuestionLevelEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionLevelEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionLevelEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionLevelEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: QuestionLevelEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionLevelEntityPolyglot>, I>>(
    base?: I
  ): QuestionLevelEntityPolyglot {
    return QuestionLevelEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionLevelEntityPolyglot>, I>>(
    object: I
  ): QuestionLevelEntityPolyglot {
    const message = createBaseQuestionLevelEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQuestionSemesterCreateReply(): QuestionSemesterCreateReply {
  return { data: undefined, error: undefined };
}

export const QuestionSemesterCreateReply = {
  encode(
    message: QuestionSemesterCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      QuestionSemesterEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionSemesterCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionSemesterCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = QuestionSemesterEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionSemesterCreateReply {
    return {
      data: isSet(object.data)
        ? QuestionSemesterEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionSemesterCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? QuestionSemesterEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionSemesterCreateReply>, I>>(
    base?: I
  ): QuestionSemesterCreateReply {
    return QuestionSemesterCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionSemesterCreateReply>, I>>(
    object: I
  ): QuestionSemesterCreateReply {
    const message = createBaseQuestionSemesterCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? QuestionSemesterEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionSemesterReply(): QuestionSemesterReply {
  return { data: undefined, error: undefined };
}

export const QuestionSemesterReply = {
  encode(
    message: QuestionSemesterReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      QuestionSemesterEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionSemesterReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionSemesterReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = QuestionSemesterEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionSemesterReply {
    return {
      data: isSet(object.data)
        ? QuestionSemesterEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionSemesterReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? QuestionSemesterEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionSemesterReply>, I>>(
    base?: I
  ): QuestionSemesterReply {
    return QuestionSemesterReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionSemesterReply>, I>>(
    object: I
  ): QuestionSemesterReply {
    const message = createBaseQuestionSemesterReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? QuestionSemesterEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionSemesterQueryReply(): QuestionSemesterQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const QuestionSemesterQueryReply = {
  encode(
    message: QuestionSemesterQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      QuestionSemesterEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionSemesterQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionSemesterQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            QuestionSemesterEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionSemesterQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => QuestionSemesterEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuestionSemesterQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? QuestionSemesterEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionSemesterQueryReply>, I>>(
    base?: I
  ): QuestionSemesterQueryReply {
    return QuestionSemesterQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionSemesterQueryReply>, I>>(
    object: I
  ): QuestionSemesterQueryReply {
    const message = createBaseQuestionSemesterQueryReply();
    message.items =
      object.items?.map((e) => QuestionSemesterEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuestionSemesterEntity(): QuestionSemesterEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const QuestionSemesterEntity = {
  encode(
    message: QuestionSemesterEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      QuestionSemesterEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionSemesterEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionSemesterEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            QuestionSemesterEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionSemesterEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            QuestionSemesterEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: QuestionSemesterEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? QuestionSemesterEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionSemesterEntity>, I>>(
    base?: I
  ): QuestionSemesterEntity {
    return QuestionSemesterEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionSemesterEntity>, I>>(
    object: I
  ): QuestionSemesterEntity {
    const message = createBaseQuestionSemesterEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        QuestionSemesterEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseQuestionSemesterEntityPolyglot(): QuestionSemesterEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const QuestionSemesterEntityPolyglot = {
  encode(
    message: QuestionSemesterEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuestionSemesterEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionSemesterEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionSemesterEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: QuestionSemesterEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionSemesterEntityPolyglot>, I>>(
    base?: I
  ): QuestionSemesterEntityPolyglot {
    return QuestionSemesterEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionSemesterEntityPolyglot>, I>>(
    object: I
  ): QuestionSemesterEntityPolyglot {
    const message = createBaseQuestionSemesterEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQuizCreateReply(): QuizCreateReply {
  return { data: undefined, error: undefined };
}

export const QuizCreateReply = {
  encode(
    message: QuizCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      QuizEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuizCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuizCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = QuizEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuizCreateReply {
    return {
      data: isSet(object.data) ? QuizEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuizCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? QuizEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuizCreateReply>, I>>(
    base?: I
  ): QuizCreateReply {
    return QuizCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuizCreateReply>, I>>(
    object: I
  ): QuizCreateReply {
    const message = createBaseQuizCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? QuizEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuizReply(): QuizReply {
  return { data: undefined, error: undefined };
}

export const QuizReply = {
  encode(
    message: QuizReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      QuizEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuizReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuizReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = QuizEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuizReply {
    return {
      data: isSet(object.data) ? QuizEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuizReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? QuizEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuizReply>, I>>(base?: I): QuizReply {
    return QuizReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuizReply>, I>>(
    object: I
  ): QuizReply {
    const message = createBaseQuizReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? QuizEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuizQueryReply(): QuizQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const QuizQueryReply = {
  encode(
    message: QuizQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      QuizEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuizQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuizQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(QuizEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuizQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => QuizEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: QuizQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? QuizEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuizQueryReply>, I>>(
    base?: I
  ): QuizQueryReply {
    return QuizQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuizQueryReply>, I>>(
    object: I
  ): QuizQueryReply {
    const message = createBaseQuizQueryReply();
    message.items = object.items?.map((e) => QuizEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseQuizEntity(): QuizEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    title: undefined,
    description: undefined,
    descriptionExcerpt: undefined,
    questionsListId: [],
    questions: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const QuizEntity = {
  encode(
    message: QuizEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.title !== undefined) {
      writer.uint32(66).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(74).string(message.description);
    }
    if (message.descriptionExcerpt !== undefined) {
      writer.uint32(82).string(message.descriptionExcerpt);
    }
    for (const v of message.questionsListId) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.questions) {
      QuestionEntity.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(112).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(120).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(128).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(138).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(146).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuizEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuizEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.title = reader.string();
          break;
        case 9:
          message.description = reader.string();
          break;
        case 10:
          message.descriptionExcerpt = reader.string();
          break;
        case 12:
          message.questionsListId.push(reader.string());
          break;
        case 13:
          message.questions.push(
            QuestionEntity.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.createdFormatted = reader.string();
          break;
        case 18:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuizEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      descriptionExcerpt: isSet(object.descriptionExcerpt)
        ? String(object.descriptionExcerpt)
        : undefined,
      questionsListId: Array.isArray(object?.questionsListId)
        ? object.questionsListId.map((e: any) => String(e))
        : [],
      questions: Array.isArray(object?.questions)
        ? object.questions.map((e: any) => QuestionEntity.fromJSON(e))
        : [],
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: QuizEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.descriptionExcerpt !== undefined &&
      (obj.descriptionExcerpt = message.descriptionExcerpt);
    if (message.questionsListId) {
      obj.questionsListId = message.questionsListId.map((e) => e);
    } else {
      obj.questionsListId = [];
    }
    if (message.questions) {
      obj.questions = message.questions.map((e) =>
        e ? QuestionEntity.toJSON(e) : undefined
      );
    } else {
      obj.questions = [];
    }
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuizEntity>, I>>(base?: I): QuizEntity {
    return QuizEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuizEntity>, I>>(
    object: I
  ): QuizEntity {
    const message = createBaseQuizEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.descriptionExcerpt = object.descriptionExcerpt ?? undefined;
    message.questionsListId = object.questionsListId?.map((e) => e) || [];
    message.questions =
      object.questions?.map((e) => QuestionEntity.fromPartial(e)) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseSchoolTypeCreateReply(): SchoolTypeCreateReply {
  return { data: undefined, error: undefined };
}

export const SchoolTypeCreateReply = {
  encode(
    message: SchoolTypeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      SchoolTypeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SchoolTypeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchoolTypeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = SchoolTypeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchoolTypeCreateReply {
    return {
      data: isSet(object.data)
        ? SchoolTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SchoolTypeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? SchoolTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SchoolTypeCreateReply>, I>>(
    base?: I
  ): SchoolTypeCreateReply {
    return SchoolTypeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SchoolTypeCreateReply>, I>>(
    object: I
  ): SchoolTypeCreateReply {
    const message = createBaseSchoolTypeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? SchoolTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseSchoolTypeReply(): SchoolTypeReply {
  return { data: undefined, error: undefined };
}

export const SchoolTypeReply = {
  encode(
    message: SchoolTypeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      SchoolTypeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchoolTypeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchoolTypeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = SchoolTypeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchoolTypeReply {
    return {
      data: isSet(object.data)
        ? SchoolTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SchoolTypeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? SchoolTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SchoolTypeReply>, I>>(
    base?: I
  ): SchoolTypeReply {
    return SchoolTypeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SchoolTypeReply>, I>>(
    object: I
  ): SchoolTypeReply {
    const message = createBaseSchoolTypeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? SchoolTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseSchoolTypeQueryReply(): SchoolTypeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const SchoolTypeQueryReply = {
  encode(
    message: SchoolTypeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      SchoolTypeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SchoolTypeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchoolTypeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(SchoolTypeEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchoolTypeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => SchoolTypeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SchoolTypeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? SchoolTypeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SchoolTypeQueryReply>, I>>(
    base?: I
  ): SchoolTypeQueryReply {
    return SchoolTypeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SchoolTypeQueryReply>, I>>(
    object: I
  ): SchoolTypeQueryReply {
    const message = createBaseSchoolTypeQueryReply();
    message.items =
      object.items?.map((e) => SchoolTypeEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseSchoolTypeEntity(): SchoolTypeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const SchoolTypeEntity = {
  encode(
    message: SchoolTypeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      SchoolTypeEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchoolTypeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchoolTypeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            SchoolTypeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchoolTypeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            SchoolTypeEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: SchoolTypeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? SchoolTypeEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<SchoolTypeEntity>, I>>(
    base?: I
  ): SchoolTypeEntity {
    return SchoolTypeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SchoolTypeEntity>, I>>(
    object: I
  ): SchoolTypeEntity {
    const message = createBaseSchoolTypeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        SchoolTypeEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseSchoolTypeEntityPolyglot(): SchoolTypeEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const SchoolTypeEntityPolyglot = {
  encode(
    message: SchoolTypeEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SchoolTypeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchoolTypeEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchoolTypeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: SchoolTypeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<SchoolTypeEntityPolyglot>, I>>(
    base?: I
  ): SchoolTypeEntityPolyglot {
    return SchoolTypeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SchoolTypeEntityPolyglot>, I>>(
    object: I
  ): SchoolTypeEntityPolyglot {
    const message = createBaseSchoolTypeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseStudyYearCreateReply(): StudyYearCreateReply {
  return { data: undefined, error: undefined };
}

export const StudyYearCreateReply = {
  encode(
    message: StudyYearCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      StudyYearEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StudyYearCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStudyYearCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = StudyYearEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StudyYearCreateReply {
    return {
      data: isSet(object.data)
        ? StudyYearEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: StudyYearCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? StudyYearEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<StudyYearCreateReply>, I>>(
    base?: I
  ): StudyYearCreateReply {
    return StudyYearCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StudyYearCreateReply>, I>>(
    object: I
  ): StudyYearCreateReply {
    const message = createBaseStudyYearCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? StudyYearEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseStudyYearReply(): StudyYearReply {
  return { data: undefined, error: undefined };
}

export const StudyYearReply = {
  encode(
    message: StudyYearReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      StudyYearEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StudyYearReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStudyYearReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = StudyYearEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StudyYearReply {
    return {
      data: isSet(object.data)
        ? StudyYearEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: StudyYearReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? StudyYearEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<StudyYearReply>, I>>(
    base?: I
  ): StudyYearReply {
    return StudyYearReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StudyYearReply>, I>>(
    object: I
  ): StudyYearReply {
    const message = createBaseStudyYearReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? StudyYearEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseStudyYearQueryReply(): StudyYearQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const StudyYearQueryReply = {
  encode(
    message: StudyYearQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      StudyYearEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StudyYearQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStudyYearQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(StudyYearEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StudyYearQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => StudyYearEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: StudyYearQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? StudyYearEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<StudyYearQueryReply>, I>>(
    base?: I
  ): StudyYearQueryReply {
    return StudyYearQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StudyYearQueryReply>, I>>(
    object: I
  ): StudyYearQueryReply {
    const message = createBaseStudyYearQueryReply();
    message.items =
      object.items?.map((e) => StudyYearEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseStudyYearEntity(): StudyYearEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const StudyYearEntity = {
  encode(
    message: StudyYearEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      StudyYearEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StudyYearEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStudyYearEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            StudyYearEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StudyYearEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            StudyYearEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: StudyYearEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? StudyYearEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<StudyYearEntity>, I>>(
    base?: I
  ): StudyYearEntity {
    return StudyYearEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StudyYearEntity>, I>>(
    object: I
  ): StudyYearEntity {
    const message = createBaseStudyYearEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) => StudyYearEntityPolyglot.fromPartial(e)) ||
      [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseStudyYearEntityPolyglot(): StudyYearEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const StudyYearEntityPolyglot = {
  encode(
    message: StudyYearEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StudyYearEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStudyYearEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StudyYearEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: StudyYearEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<StudyYearEntityPolyglot>, I>>(
    base?: I
  ): StudyYearEntityPolyglot {
    return StudyYearEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StudyYearEntityPolyglot>, I>>(
    object: I
  ): StudyYearEntityPolyglot {
    const message = createBaseStudyYearEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseUnitCreateReply(): UnitCreateReply {
  return { data: undefined, error: undefined };
}

export const UnitCreateReply = {
  encode(
    message: UnitCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      UnitEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = UnitEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnitCreateReply {
    return {
      data: isSet(object.data) ? UnitEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: UnitCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? UnitEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UnitCreateReply>, I>>(
    base?: I
  ): UnitCreateReply {
    return UnitCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UnitCreateReply>, I>>(
    object: I
  ): UnitCreateReply {
    const message = createBaseUnitCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? UnitEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseUnitReply(): UnitReply {
  return { data: undefined, error: undefined };
}

export const UnitReply = {
  encode(
    message: UnitReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      UnitEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = UnitEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnitReply {
    return {
      data: isSet(object.data) ? UnitEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: UnitReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? UnitEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UnitReply>, I>>(base?: I): UnitReply {
    return UnitReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UnitReply>, I>>(
    object: I
  ): UnitReply {
    const message = createBaseUnitReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? UnitEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseUnitQueryReply(): UnitQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const UnitQueryReply = {
  encode(
    message: UnitQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      UnitEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(UnitEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnitQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => UnitEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: UnitQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? UnitEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UnitQueryReply>, I>>(
    base?: I
  ): UnitQueryReply {
    return UnitQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UnitQueryReply>, I>>(
    object: I
  ): UnitQueryReply {
    const message = createBaseUnitQueryReply();
    message.items = object.items?.map((e) => UnitEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseUnitEntity(): UnitEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    courseId: undefined,
    course: undefined,
    title: undefined,
    content: undefined,
    contentExcerpt: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const UnitEntity = {
  encode(
    message: UnitEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.courseId !== undefined) {
      writer.uint32(74).string(message.courseId);
    }
    if (message.course !== undefined) {
      CourseEntity.encode(message.course, writer.uint32(82).fork()).ldelim();
    }
    if (message.title !== undefined) {
      writer.uint32(90).string(message.title);
    }
    if (message.content !== undefined) {
      writer.uint32(98).string(message.content);
    }
    if (message.contentExcerpt !== undefined) {
      writer.uint32(106).string(message.contentExcerpt);
    }
    if (message.rank !== 0) {
      writer.uint32(112).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(120).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(128).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(138).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(146).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.courseId = reader.string();
          break;
        case 10:
          message.course = CourseEntity.decode(reader, reader.uint32());
          break;
        case 11:
          message.title = reader.string();
          break;
        case 12:
          message.content = reader.string();
          break;
        case 13:
          message.contentExcerpt = reader.string();
          break;
        case 14:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.createdFormatted = reader.string();
          break;
        case 18:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnitEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      courseId: isSet(object.courseId) ? String(object.courseId) : undefined,
      course: isSet(object.course)
        ? CourseEntity.fromJSON(object.course)
        : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      content: isSet(object.content) ? String(object.content) : undefined,
      contentExcerpt: isSet(object.contentExcerpt)
        ? String(object.contentExcerpt)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: UnitEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.courseId !== undefined && (obj.courseId = message.courseId);
    message.course !== undefined &&
      (obj.course = message.course
        ? CourseEntity.toJSON(message.course)
        : undefined);
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    message.contentExcerpt !== undefined &&
      (obj.contentExcerpt = message.contentExcerpt);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<UnitEntity>, I>>(base?: I): UnitEntity {
    return UnitEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UnitEntity>, I>>(
    object: I
  ): UnitEntity {
    const message = createBaseUnitEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.courseId = object.courseId ?? undefined;
    message.course =
      object.course !== undefined && object.course !== null
        ? CourseEntity.fromPartial(object.course)
        : undefined;
    message.title = object.title ?? undefined;
    message.content = object.content ?? undefined;
    message.contentExcerpt = object.contentExcerpt ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseHierarchyRecord(): HierarchyRecord {
  return { linkerId: "", uniqueId: "" };
}

export const HierarchyRecord = {
  encode(
    message: HierarchyRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(18).string(message.uniqueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HierarchyRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHierarchyRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.uniqueId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HierarchyRecord {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
    };
  },

  toJSON(message: HierarchyRecord): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },

  create<I extends Exact<DeepPartial<HierarchyRecord>, I>>(
    base?: I
  ): HierarchyRecord {
    return HierarchyRecord.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HierarchyRecord>, I>>(
    object: I
  ): HierarchyRecord {
    const message = createBaseHierarchyRecord();
    message.linkerId = object.linkerId ?? "";
    message.uniqueId = object.uniqueId ?? "";
    return message;
  },
};

function createBaseHierarchyUpdateDto(): HierarchyUpdateDto {
  return { records: [] };
}

export const HierarchyUpdateDto = {
  encode(
    message: HierarchyUpdateDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.records) {
      HierarchyRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HierarchyUpdateDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHierarchyUpdateDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(HierarchyRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HierarchyUpdateDto {
    return {
      records: Array.isArray(object?.records)
        ? object.records.map((e: any) => HierarchyRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: HierarchyUpdateDto): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) =>
        e ? HierarchyRecord.toJSON(e) : undefined
      );
    } else {
      obj.records = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HierarchyUpdateDto>, I>>(
    base?: I
  ): HierarchyUpdateDto {
    return HierarchyUpdateDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HierarchyUpdateDto>, I>>(
    object: I
  ): HierarchyUpdateDto {
    const message = createBaseHierarchyUpdateDto();
    message.records =
      object.records?.map((e) => HierarchyRecord.fromPartial(e)) || [];
    return message;
  },
};

export interface AcSections {
  AcSectionActionCreate(
    request: AcSectionEntity
  ): Promise<AcSectionCreateReply>;
  AcSectionActionUpdate(
    request: AcSectionEntity
  ): Promise<AcSectionCreateReply>;
  AcSectionActionQuery(
    request: QueryFilterRequest
  ): Promise<AcSectionQueryReply>;
  AcSectionActionGetOne(request: QueryFilterRequest): Promise<AcSectionReply>;
  AcSectionActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class AcSectionsClientImpl implements AcSections {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AcSections";
    this.rpc = rpc;
    this.AcSectionActionCreate = this.AcSectionActionCreate.bind(this);
    this.AcSectionActionUpdate = this.AcSectionActionUpdate.bind(this);
    this.AcSectionActionQuery = this.AcSectionActionQuery.bind(this);
    this.AcSectionActionGetOne = this.AcSectionActionGetOne.bind(this);
    this.AcSectionActionRemove = this.AcSectionActionRemove.bind(this);
  }
  AcSectionActionCreate(
    request: AcSectionEntity
  ): Promise<AcSectionCreateReply> {
    const data = AcSectionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcSectionActionCreate",
      data
    );
    return promise.then((data) =>
      AcSectionCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcSectionActionUpdate(
    request: AcSectionEntity
  ): Promise<AcSectionCreateReply> {
    const data = AcSectionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcSectionActionUpdate",
      data
    );
    return promise.then((data) =>
      AcSectionCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcSectionActionQuery(
    request: QueryFilterRequest
  ): Promise<AcSectionQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcSectionActionQuery",
      data
    );
    return promise.then((data) =>
      AcSectionQueryReply.decode(new _m0.Reader(data))
    );
  }

  AcSectionActionGetOne(request: QueryFilterRequest): Promise<AcSectionReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcSectionActionGetOne",
      data
    );
    return promise.then((data) => AcSectionReply.decode(new _m0.Reader(data)));
  }

  AcSectionActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcSectionActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface AcTasks {
  AcTaskActionCreate(request: AcTaskEntity): Promise<AcTaskCreateReply>;
  AcTaskActionUpdate(request: AcTaskEntity): Promise<AcTaskCreateReply>;
  AcTaskActionQuery(request: QueryFilterRequest): Promise<AcTaskQueryReply>;
  AcTaskActionGetOne(request: QueryFilterRequest): Promise<AcTaskReply>;
  AcTaskActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class AcTasksClientImpl implements AcTasks {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AcTasks";
    this.rpc = rpc;
    this.AcTaskActionCreate = this.AcTaskActionCreate.bind(this);
    this.AcTaskActionUpdate = this.AcTaskActionUpdate.bind(this);
    this.AcTaskActionQuery = this.AcTaskActionQuery.bind(this);
    this.AcTaskActionGetOne = this.AcTaskActionGetOne.bind(this);
    this.AcTaskActionRemove = this.AcTaskActionRemove.bind(this);
  }
  AcTaskActionCreate(request: AcTaskEntity): Promise<AcTaskCreateReply> {
    const data = AcTaskEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcTaskActionCreate", data);
    return promise.then((data) =>
      AcTaskCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcTaskActionUpdate(request: AcTaskEntity): Promise<AcTaskCreateReply> {
    const data = AcTaskEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcTaskActionUpdate", data);
    return promise.then((data) =>
      AcTaskCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcTaskActionQuery(request: QueryFilterRequest): Promise<AcTaskQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcTaskActionQuery", data);
    return promise.then((data) =>
      AcTaskQueryReply.decode(new _m0.Reader(data))
    );
  }

  AcTaskActionGetOne(request: QueryFilterRequest): Promise<AcTaskReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcTaskActionGetOne", data);
    return promise.then((data) => AcTaskReply.decode(new _m0.Reader(data)));
  }

  AcTaskActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcTaskActionRemove", data);
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ClassRooms {
  ClassRoomActionCreate(
    request: ClassRoomEntity
  ): Promise<ClassRoomCreateReply>;
  ClassRoomActionUpdate(
    request: ClassRoomEntity
  ): Promise<ClassRoomCreateReply>;
  ClassRoomActionQuery(
    request: QueryFilterRequest
  ): Promise<ClassRoomQueryReply>;
  ClassRoomActionGetOne(request: QueryFilterRequest): Promise<ClassRoomReply>;
  ClassRoomActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ClassRoomsClientImpl implements ClassRooms {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ClassRooms";
    this.rpc = rpc;
    this.ClassRoomActionCreate = this.ClassRoomActionCreate.bind(this);
    this.ClassRoomActionUpdate = this.ClassRoomActionUpdate.bind(this);
    this.ClassRoomActionQuery = this.ClassRoomActionQuery.bind(this);
    this.ClassRoomActionGetOne = this.ClassRoomActionGetOne.bind(this);
    this.ClassRoomActionRemove = this.ClassRoomActionRemove.bind(this);
  }
  ClassRoomActionCreate(
    request: ClassRoomEntity
  ): Promise<ClassRoomCreateReply> {
    const data = ClassRoomEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ClassRoomActionCreate",
      data
    );
    return promise.then((data) =>
      ClassRoomCreateReply.decode(new _m0.Reader(data))
    );
  }

  ClassRoomActionUpdate(
    request: ClassRoomEntity
  ): Promise<ClassRoomCreateReply> {
    const data = ClassRoomEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ClassRoomActionUpdate",
      data
    );
    return promise.then((data) =>
      ClassRoomCreateReply.decode(new _m0.Reader(data))
    );
  }

  ClassRoomActionQuery(
    request: QueryFilterRequest
  ): Promise<ClassRoomQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ClassRoomActionQuery",
      data
    );
    return promise.then((data) =>
      ClassRoomQueryReply.decode(new _m0.Reader(data))
    );
  }

  ClassRoomActionGetOne(request: QueryFilterRequest): Promise<ClassRoomReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ClassRoomActionGetOne",
      data
    );
    return promise.then((data) => ClassRoomReply.decode(new _m0.Reader(data)));
  }

  ClassRoomActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ClassRoomActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface Courses {
  CourseActionCreate(request: CourseEntity): Promise<CourseCreateReply>;
  CourseActionUpdate(request: CourseEntity): Promise<CourseCreateReply>;
  CourseActionQuery(request: QueryFilterRequest): Promise<CourseQueryReply>;
  CourseActionGetOne(request: QueryFilterRequest): Promise<CourseReply>;
  CourseActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class CoursesClientImpl implements Courses {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Courses";
    this.rpc = rpc;
    this.CourseActionCreate = this.CourseActionCreate.bind(this);
    this.CourseActionUpdate = this.CourseActionUpdate.bind(this);
    this.CourseActionQuery = this.CourseActionQuery.bind(this);
    this.CourseActionGetOne = this.CourseActionGetOne.bind(this);
    this.CourseActionRemove = this.CourseActionRemove.bind(this);
  }
  CourseActionCreate(request: CourseEntity): Promise<CourseCreateReply> {
    const data = CourseEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "CourseActionCreate", data);
    return promise.then((data) =>
      CourseCreateReply.decode(new _m0.Reader(data))
    );
  }

  CourseActionUpdate(request: CourseEntity): Promise<CourseCreateReply> {
    const data = CourseEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "CourseActionUpdate", data);
    return promise.then((data) =>
      CourseCreateReply.decode(new _m0.Reader(data))
    );
  }

  CourseActionQuery(request: QueryFilterRequest): Promise<CourseQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CourseActionQuery", data);
    return promise.then((data) =>
      CourseQueryReply.decode(new _m0.Reader(data))
    );
  }

  CourseActionGetOne(request: QueryFilterRequest): Promise<CourseReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CourseActionGetOne", data);
    return promise.then((data) => CourseReply.decode(new _m0.Reader(data)));
  }

  CourseActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CourseActionRemove", data);
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface CourseEnrollments {
  CourseEnrollmentActionCreate(
    request: CourseEnrollmentEntity
  ): Promise<CourseEnrollmentCreateReply>;
  CourseEnrollmentActionUpdate(
    request: CourseEnrollmentEntity
  ): Promise<CourseEnrollmentCreateReply>;
  CourseEnrollmentActionQuery(
    request: QueryFilterRequest
  ): Promise<CourseEnrollmentQueryReply>;
  CourseEnrollmentActionGetOne(
    request: QueryFilterRequest
  ): Promise<CourseEnrollmentReply>;
  CourseEnrollmentActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class CourseEnrollmentsClientImpl implements CourseEnrollments {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "CourseEnrollments";
    this.rpc = rpc;
    this.CourseEnrollmentActionCreate =
      this.CourseEnrollmentActionCreate.bind(this);
    this.CourseEnrollmentActionUpdate =
      this.CourseEnrollmentActionUpdate.bind(this);
    this.CourseEnrollmentActionQuery =
      this.CourseEnrollmentActionQuery.bind(this);
    this.CourseEnrollmentActionGetOne =
      this.CourseEnrollmentActionGetOne.bind(this);
    this.CourseEnrollmentActionRemove =
      this.CourseEnrollmentActionRemove.bind(this);
  }
  CourseEnrollmentActionCreate(
    request: CourseEnrollmentEntity
  ): Promise<CourseEnrollmentCreateReply> {
    const data = CourseEnrollmentEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "CourseEnrollmentActionCreate",
      data
    );
    return promise.then((data) =>
      CourseEnrollmentCreateReply.decode(new _m0.Reader(data))
    );
  }

  CourseEnrollmentActionUpdate(
    request: CourseEnrollmentEntity
  ): Promise<CourseEnrollmentCreateReply> {
    const data = CourseEnrollmentEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "CourseEnrollmentActionUpdate",
      data
    );
    return promise.then((data) =>
      CourseEnrollmentCreateReply.decode(new _m0.Reader(data))
    );
  }

  CourseEnrollmentActionQuery(
    request: QueryFilterRequest
  ): Promise<CourseEnrollmentQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "CourseEnrollmentActionQuery",
      data
    );
    return promise.then((data) =>
      CourseEnrollmentQueryReply.decode(new _m0.Reader(data))
    );
  }

  CourseEnrollmentActionGetOne(
    request: QueryFilterRequest
  ): Promise<CourseEnrollmentReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "CourseEnrollmentActionGetOne",
      data
    );
    return promise.then((data) =>
      CourseEnrollmentReply.decode(new _m0.Reader(data))
    );
  }

  CourseEnrollmentActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "CourseEnrollmentActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface Exams {
  ExamActionCreate(request: ExamEntity): Promise<ExamCreateReply>;
  ExamActionUpdate(request: ExamEntity): Promise<ExamCreateReply>;
  ExamActionQuery(request: QueryFilterRequest): Promise<ExamQueryReply>;
  ExamActionGetOne(request: QueryFilterRequest): Promise<ExamReply>;
  ExamActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ExamsClientImpl implements Exams {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Exams";
    this.rpc = rpc;
    this.ExamActionCreate = this.ExamActionCreate.bind(this);
    this.ExamActionUpdate = this.ExamActionUpdate.bind(this);
    this.ExamActionQuery = this.ExamActionQuery.bind(this);
    this.ExamActionGetOne = this.ExamActionGetOne.bind(this);
    this.ExamActionRemove = this.ExamActionRemove.bind(this);
  }
  ExamActionCreate(request: ExamEntity): Promise<ExamCreateReply> {
    const data = ExamEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExamActionCreate", data);
    return promise.then((data) => ExamCreateReply.decode(new _m0.Reader(data)));
  }

  ExamActionUpdate(request: ExamEntity): Promise<ExamCreateReply> {
    const data = ExamEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExamActionUpdate", data);
    return promise.then((data) => ExamCreateReply.decode(new _m0.Reader(data)));
  }

  ExamActionQuery(request: QueryFilterRequest): Promise<ExamQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExamActionQuery", data);
    return promise.then((data) => ExamQueryReply.decode(new _m0.Reader(data)));
  }

  ExamActionGetOne(request: QueryFilterRequest): Promise<ExamReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExamActionGetOne", data);
    return promise.then((data) => ExamReply.decode(new _m0.Reader(data)));
  }

  ExamActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExamActionRemove", data);
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ExamSessions {
  ExamSessionActionCreate(
    request: ExamSessionEntity
  ): Promise<ExamSessionCreateReply>;
  ExamSessionActionUpdate(
    request: ExamSessionEntity
  ): Promise<ExamSessionCreateReply>;
  ExamSessionActionQuery(
    request: QueryFilterRequest
  ): Promise<ExamSessionQueryReply>;
  ExamSessionActionGetOne(
    request: QueryFilterRequest
  ): Promise<ExamSessionReply>;
  ExamSessionActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ExamSessionsClientImpl implements ExamSessions {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ExamSessions";
    this.rpc = rpc;
    this.ExamSessionActionCreate = this.ExamSessionActionCreate.bind(this);
    this.ExamSessionActionUpdate = this.ExamSessionActionUpdate.bind(this);
    this.ExamSessionActionQuery = this.ExamSessionActionQuery.bind(this);
    this.ExamSessionActionGetOne = this.ExamSessionActionGetOne.bind(this);
    this.ExamSessionActionRemove = this.ExamSessionActionRemove.bind(this);
  }
  ExamSessionActionCreate(
    request: ExamSessionEntity
  ): Promise<ExamSessionCreateReply> {
    const data = ExamSessionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ExamSessionActionCreate",
      data
    );
    return promise.then((data) =>
      ExamSessionCreateReply.decode(new _m0.Reader(data))
    );
  }

  ExamSessionActionUpdate(
    request: ExamSessionEntity
  ): Promise<ExamSessionCreateReply> {
    const data = ExamSessionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ExamSessionActionUpdate",
      data
    );
    return promise.then((data) =>
      ExamSessionCreateReply.decode(new _m0.Reader(data))
    );
  }

  ExamSessionActionQuery(
    request: QueryFilterRequest
  ): Promise<ExamSessionQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ExamSessionActionQuery",
      data
    );
    return promise.then((data) =>
      ExamSessionQueryReply.decode(new _m0.Reader(data))
    );
  }

  ExamSessionActionGetOne(
    request: QueryFilterRequest
  ): Promise<ExamSessionReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ExamSessionActionGetOne",
      data
    );
    return promise.then((data) =>
      ExamSessionReply.decode(new _m0.Reader(data))
    );
  }

  ExamSessionActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ExamSessionActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ExamSessionReviews {
  ExamSessionReviewActionCreate(
    request: ExamSessionReviewEntity
  ): Promise<ExamSessionReviewCreateReply>;
  ExamSessionReviewActionUpdate(
    request: ExamSessionReviewEntity
  ): Promise<ExamSessionReviewCreateReply>;
  ExamSessionReviewActionQuery(
    request: QueryFilterRequest
  ): Promise<ExamSessionReviewQueryReply>;
  ExamSessionReviewActionGetOne(
    request: QueryFilterRequest
  ): Promise<ExamSessionReviewReply>;
  ExamSessionReviewActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class ExamSessionReviewsClientImpl implements ExamSessionReviews {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ExamSessionReviews";
    this.rpc = rpc;
    this.ExamSessionReviewActionCreate =
      this.ExamSessionReviewActionCreate.bind(this);
    this.ExamSessionReviewActionUpdate =
      this.ExamSessionReviewActionUpdate.bind(this);
    this.ExamSessionReviewActionQuery =
      this.ExamSessionReviewActionQuery.bind(this);
    this.ExamSessionReviewActionGetOne =
      this.ExamSessionReviewActionGetOne.bind(this);
    this.ExamSessionReviewActionRemove =
      this.ExamSessionReviewActionRemove.bind(this);
  }
  ExamSessionReviewActionCreate(
    request: ExamSessionReviewEntity
  ): Promise<ExamSessionReviewCreateReply> {
    const data = ExamSessionReviewEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ExamSessionReviewActionCreate",
      data
    );
    return promise.then((data) =>
      ExamSessionReviewCreateReply.decode(new _m0.Reader(data))
    );
  }

  ExamSessionReviewActionUpdate(
    request: ExamSessionReviewEntity
  ): Promise<ExamSessionReviewCreateReply> {
    const data = ExamSessionReviewEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ExamSessionReviewActionUpdate",
      data
    );
    return promise.then((data) =>
      ExamSessionReviewCreateReply.decode(new _m0.Reader(data))
    );
  }

  ExamSessionReviewActionQuery(
    request: QueryFilterRequest
  ): Promise<ExamSessionReviewQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ExamSessionReviewActionQuery",
      data
    );
    return promise.then((data) =>
      ExamSessionReviewQueryReply.decode(new _m0.Reader(data))
    );
  }

  ExamSessionReviewActionGetOne(
    request: QueryFilterRequest
  ): Promise<ExamSessionReviewReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ExamSessionReviewActionGetOne",
      data
    );
    return promise.then((data) =>
      ExamSessionReviewReply.decode(new _m0.Reader(data))
    );
  }

  ExamSessionReviewActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ExamSessionReviewActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface QuestionBanks {
  QuestionBankActionCreate(
    request: QuestionBankEntity
  ): Promise<QuestionBankCreateReply>;
  QuestionBankActionUpdate(
    request: QuestionBankEntity
  ): Promise<QuestionBankCreateReply>;
  QuestionBankActionQuery(
    request: QueryFilterRequest
  ): Promise<QuestionBankQueryReply>;
  QuestionBankActionGetOne(
    request: QueryFilterRequest
  ): Promise<QuestionBankReply>;
  QuestionBankActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class QuestionBanksClientImpl implements QuestionBanks {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "QuestionBanks";
    this.rpc = rpc;
    this.QuestionBankActionCreate = this.QuestionBankActionCreate.bind(this);
    this.QuestionBankActionUpdate = this.QuestionBankActionUpdate.bind(this);
    this.QuestionBankActionQuery = this.QuestionBankActionQuery.bind(this);
    this.QuestionBankActionGetOne = this.QuestionBankActionGetOne.bind(this);
    this.QuestionBankActionRemove = this.QuestionBankActionRemove.bind(this);
  }
  QuestionBankActionCreate(
    request: QuestionBankEntity
  ): Promise<QuestionBankCreateReply> {
    const data = QuestionBankEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionBankActionCreate",
      data
    );
    return promise.then((data) =>
      QuestionBankCreateReply.decode(new _m0.Reader(data))
    );
  }

  QuestionBankActionUpdate(
    request: QuestionBankEntity
  ): Promise<QuestionBankCreateReply> {
    const data = QuestionBankEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionBankActionUpdate",
      data
    );
    return promise.then((data) =>
      QuestionBankCreateReply.decode(new _m0.Reader(data))
    );
  }

  QuestionBankActionQuery(
    request: QueryFilterRequest
  ): Promise<QuestionBankQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionBankActionQuery",
      data
    );
    return promise.then((data) =>
      QuestionBankQueryReply.decode(new _m0.Reader(data))
    );
  }

  QuestionBankActionGetOne(
    request: QueryFilterRequest
  ): Promise<QuestionBankReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionBankActionGetOne",
      data
    );
    return promise.then((data) =>
      QuestionBankReply.decode(new _m0.Reader(data))
    );
  }

  QuestionBankActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionBankActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface Questions {
  QuestionActionCreate(request: QuestionEntity): Promise<QuestionCreateReply>;
  QuestionActionUpdate(request: QuestionEntity): Promise<QuestionCreateReply>;
  QuestionActionQuery(request: QueryFilterRequest): Promise<QuestionQueryReply>;
  QuestionActionGetOne(request: QueryFilterRequest): Promise<QuestionReply>;
  QuestionActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class QuestionsClientImpl implements Questions {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Questions";
    this.rpc = rpc;
    this.QuestionActionCreate = this.QuestionActionCreate.bind(this);
    this.QuestionActionUpdate = this.QuestionActionUpdate.bind(this);
    this.QuestionActionQuery = this.QuestionActionQuery.bind(this);
    this.QuestionActionGetOne = this.QuestionActionGetOne.bind(this);
    this.QuestionActionRemove = this.QuestionActionRemove.bind(this);
  }
  QuestionActionCreate(request: QuestionEntity): Promise<QuestionCreateReply> {
    const data = QuestionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionActionCreate",
      data
    );
    return promise.then((data) =>
      QuestionCreateReply.decode(new _m0.Reader(data))
    );
  }

  QuestionActionUpdate(request: QuestionEntity): Promise<QuestionCreateReply> {
    const data = QuestionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionActionUpdate",
      data
    );
    return promise.then((data) =>
      QuestionCreateReply.decode(new _m0.Reader(data))
    );
  }

  QuestionActionQuery(
    request: QueryFilterRequest
  ): Promise<QuestionQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuestionActionQuery", data);
    return promise.then((data) =>
      QuestionQueryReply.decode(new _m0.Reader(data))
    );
  }

  QuestionActionGetOne(request: QueryFilterRequest): Promise<QuestionReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionActionGetOne",
      data
    );
    return promise.then((data) => QuestionReply.decode(new _m0.Reader(data)));
  }

  QuestionActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface QuestionDifficulityLevels {
  QuestionDifficulityLevelActionCreate(
    request: QuestionDifficulityLevelEntity
  ): Promise<QuestionDifficulityLevelCreateReply>;
  QuestionDifficulityLevelActionUpdate(
    request: QuestionDifficulityLevelEntity
  ): Promise<QuestionDifficulityLevelCreateReply>;
  QuestionDifficulityLevelActionQuery(
    request: QueryFilterRequest
  ): Promise<QuestionDifficulityLevelQueryReply>;
  QuestionDifficulityLevelActionGetOne(
    request: QueryFilterRequest
  ): Promise<QuestionDifficulityLevelReply>;
  QuestionDifficulityLevelActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class QuestionDifficulityLevelsClientImpl
  implements QuestionDifficulityLevels
{
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "QuestionDifficulityLevels";
    this.rpc = rpc;
    this.QuestionDifficulityLevelActionCreate =
      this.QuestionDifficulityLevelActionCreate.bind(this);
    this.QuestionDifficulityLevelActionUpdate =
      this.QuestionDifficulityLevelActionUpdate.bind(this);
    this.QuestionDifficulityLevelActionQuery =
      this.QuestionDifficulityLevelActionQuery.bind(this);
    this.QuestionDifficulityLevelActionGetOne =
      this.QuestionDifficulityLevelActionGetOne.bind(this);
    this.QuestionDifficulityLevelActionRemove =
      this.QuestionDifficulityLevelActionRemove.bind(this);
  }
  QuestionDifficulityLevelActionCreate(
    request: QuestionDifficulityLevelEntity
  ): Promise<QuestionDifficulityLevelCreateReply> {
    const data = QuestionDifficulityLevelEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionDifficulityLevelActionCreate",
      data
    );
    return promise.then((data) =>
      QuestionDifficulityLevelCreateReply.decode(new _m0.Reader(data))
    );
  }

  QuestionDifficulityLevelActionUpdate(
    request: QuestionDifficulityLevelEntity
  ): Promise<QuestionDifficulityLevelCreateReply> {
    const data = QuestionDifficulityLevelEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionDifficulityLevelActionUpdate",
      data
    );
    return promise.then((data) =>
      QuestionDifficulityLevelCreateReply.decode(new _m0.Reader(data))
    );
  }

  QuestionDifficulityLevelActionQuery(
    request: QueryFilterRequest
  ): Promise<QuestionDifficulityLevelQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionDifficulityLevelActionQuery",
      data
    );
    return promise.then((data) =>
      QuestionDifficulityLevelQueryReply.decode(new _m0.Reader(data))
    );
  }

  QuestionDifficulityLevelActionGetOne(
    request: QueryFilterRequest
  ): Promise<QuestionDifficulityLevelReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionDifficulityLevelActionGetOne",
      data
    );
    return promise.then((data) =>
      QuestionDifficulityLevelReply.decode(new _m0.Reader(data))
    );
  }

  QuestionDifficulityLevelActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionDifficulityLevelActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface QuestionLevels {
  QuestionLevelActionCreate(
    request: QuestionLevelEntity
  ): Promise<QuestionLevelCreateReply>;
  QuestionLevelActionUpdate(
    request: QuestionLevelEntity
  ): Promise<QuestionLevelCreateReply>;
  QuestionLevelActionQuery(
    request: QueryFilterRequest
  ): Promise<QuestionLevelQueryReply>;
  QuestionLevelActionGetOne(
    request: QueryFilterRequest
  ): Promise<QuestionLevelReply>;
  QuestionLevelActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class QuestionLevelsClientImpl implements QuestionLevels {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "QuestionLevels";
    this.rpc = rpc;
    this.QuestionLevelActionCreate = this.QuestionLevelActionCreate.bind(this);
    this.QuestionLevelActionUpdate = this.QuestionLevelActionUpdate.bind(this);
    this.QuestionLevelActionQuery = this.QuestionLevelActionQuery.bind(this);
    this.QuestionLevelActionGetOne = this.QuestionLevelActionGetOne.bind(this);
    this.QuestionLevelActionRemove = this.QuestionLevelActionRemove.bind(this);
  }
  QuestionLevelActionCreate(
    request: QuestionLevelEntity
  ): Promise<QuestionLevelCreateReply> {
    const data = QuestionLevelEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionLevelActionCreate",
      data
    );
    return promise.then((data) =>
      QuestionLevelCreateReply.decode(new _m0.Reader(data))
    );
  }

  QuestionLevelActionUpdate(
    request: QuestionLevelEntity
  ): Promise<QuestionLevelCreateReply> {
    const data = QuestionLevelEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionLevelActionUpdate",
      data
    );
    return promise.then((data) =>
      QuestionLevelCreateReply.decode(new _m0.Reader(data))
    );
  }

  QuestionLevelActionQuery(
    request: QueryFilterRequest
  ): Promise<QuestionLevelQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionLevelActionQuery",
      data
    );
    return promise.then((data) =>
      QuestionLevelQueryReply.decode(new _m0.Reader(data))
    );
  }

  QuestionLevelActionGetOne(
    request: QueryFilterRequest
  ): Promise<QuestionLevelReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionLevelActionGetOne",
      data
    );
    return promise.then((data) =>
      QuestionLevelReply.decode(new _m0.Reader(data))
    );
  }

  QuestionLevelActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionLevelActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface QuestionSemesters {
  QuestionSemesterActionCreate(
    request: QuestionSemesterEntity
  ): Promise<QuestionSemesterCreateReply>;
  QuestionSemesterActionUpdate(
    request: QuestionSemesterEntity
  ): Promise<QuestionSemesterCreateReply>;
  QuestionSemesterActionQuery(
    request: QueryFilterRequest
  ): Promise<QuestionSemesterQueryReply>;
  QuestionSemesterActionGetOne(
    request: QueryFilterRequest
  ): Promise<QuestionSemesterReply>;
  QuestionSemesterActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class QuestionSemestersClientImpl implements QuestionSemesters {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "QuestionSemesters";
    this.rpc = rpc;
    this.QuestionSemesterActionCreate =
      this.QuestionSemesterActionCreate.bind(this);
    this.QuestionSemesterActionUpdate =
      this.QuestionSemesterActionUpdate.bind(this);
    this.QuestionSemesterActionQuery =
      this.QuestionSemesterActionQuery.bind(this);
    this.QuestionSemesterActionGetOne =
      this.QuestionSemesterActionGetOne.bind(this);
    this.QuestionSemesterActionRemove =
      this.QuestionSemesterActionRemove.bind(this);
  }
  QuestionSemesterActionCreate(
    request: QuestionSemesterEntity
  ): Promise<QuestionSemesterCreateReply> {
    const data = QuestionSemesterEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionSemesterActionCreate",
      data
    );
    return promise.then((data) =>
      QuestionSemesterCreateReply.decode(new _m0.Reader(data))
    );
  }

  QuestionSemesterActionUpdate(
    request: QuestionSemesterEntity
  ): Promise<QuestionSemesterCreateReply> {
    const data = QuestionSemesterEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionSemesterActionUpdate",
      data
    );
    return promise.then((data) =>
      QuestionSemesterCreateReply.decode(new _m0.Reader(data))
    );
  }

  QuestionSemesterActionQuery(
    request: QueryFilterRequest
  ): Promise<QuestionSemesterQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionSemesterActionQuery",
      data
    );
    return promise.then((data) =>
      QuestionSemesterQueryReply.decode(new _m0.Reader(data))
    );
  }

  QuestionSemesterActionGetOne(
    request: QueryFilterRequest
  ): Promise<QuestionSemesterReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionSemesterActionGetOne",
      data
    );
    return promise.then((data) =>
      QuestionSemesterReply.decode(new _m0.Reader(data))
    );
  }

  QuestionSemesterActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "QuestionSemesterActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface Quizs {
  QuizActionCreate(request: QuizEntity): Promise<QuizCreateReply>;
  QuizActionUpdate(request: QuizEntity): Promise<QuizCreateReply>;
  QuizActionQuery(request: QueryFilterRequest): Promise<QuizQueryReply>;
  QuizActionGetOne(request: QueryFilterRequest): Promise<QuizReply>;
  QuizActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class QuizsClientImpl implements Quizs {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Quizs";
    this.rpc = rpc;
    this.QuizActionCreate = this.QuizActionCreate.bind(this);
    this.QuizActionUpdate = this.QuizActionUpdate.bind(this);
    this.QuizActionQuery = this.QuizActionQuery.bind(this);
    this.QuizActionGetOne = this.QuizActionGetOne.bind(this);
    this.QuizActionRemove = this.QuizActionRemove.bind(this);
  }
  QuizActionCreate(request: QuizEntity): Promise<QuizCreateReply> {
    const data = QuizEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuizActionCreate", data);
    return promise.then((data) => QuizCreateReply.decode(new _m0.Reader(data)));
  }

  QuizActionUpdate(request: QuizEntity): Promise<QuizCreateReply> {
    const data = QuizEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuizActionUpdate", data);
    return promise.then((data) => QuizCreateReply.decode(new _m0.Reader(data)));
  }

  QuizActionQuery(request: QueryFilterRequest): Promise<QuizQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuizActionQuery", data);
    return promise.then((data) => QuizQueryReply.decode(new _m0.Reader(data)));
  }

  QuizActionGetOne(request: QueryFilterRequest): Promise<QuizReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuizActionGetOne", data);
    return promise.then((data) => QuizReply.decode(new _m0.Reader(data)));
  }

  QuizActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuizActionRemove", data);
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface SchoolTypes {
  SchoolTypeActionCreate(
    request: SchoolTypeEntity
  ): Promise<SchoolTypeCreateReply>;
  SchoolTypeActionUpdate(
    request: SchoolTypeEntity
  ): Promise<SchoolTypeCreateReply>;
  SchoolTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<SchoolTypeQueryReply>;
  SchoolTypeActionGetOne(request: QueryFilterRequest): Promise<SchoolTypeReply>;
  SchoolTypeActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class SchoolTypesClientImpl implements SchoolTypes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "SchoolTypes";
    this.rpc = rpc;
    this.SchoolTypeActionCreate = this.SchoolTypeActionCreate.bind(this);
    this.SchoolTypeActionUpdate = this.SchoolTypeActionUpdate.bind(this);
    this.SchoolTypeActionQuery = this.SchoolTypeActionQuery.bind(this);
    this.SchoolTypeActionGetOne = this.SchoolTypeActionGetOne.bind(this);
    this.SchoolTypeActionRemove = this.SchoolTypeActionRemove.bind(this);
  }
  SchoolTypeActionCreate(
    request: SchoolTypeEntity
  ): Promise<SchoolTypeCreateReply> {
    const data = SchoolTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SchoolTypeActionCreate",
      data
    );
    return promise.then((data) =>
      SchoolTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  SchoolTypeActionUpdate(
    request: SchoolTypeEntity
  ): Promise<SchoolTypeCreateReply> {
    const data = SchoolTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SchoolTypeActionUpdate",
      data
    );
    return promise.then((data) =>
      SchoolTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  SchoolTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<SchoolTypeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SchoolTypeActionQuery",
      data
    );
    return promise.then((data) =>
      SchoolTypeQueryReply.decode(new _m0.Reader(data))
    );
  }

  SchoolTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<SchoolTypeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SchoolTypeActionGetOne",
      data
    );
    return promise.then((data) => SchoolTypeReply.decode(new _m0.Reader(data)));
  }

  SchoolTypeActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SchoolTypeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface StudyYears {
  StudyYearActionCreate(
    request: StudyYearEntity
  ): Promise<StudyYearCreateReply>;
  StudyYearActionUpdate(
    request: StudyYearEntity
  ): Promise<StudyYearCreateReply>;
  StudyYearActionQuery(
    request: QueryFilterRequest
  ): Promise<StudyYearQueryReply>;
  StudyYearActionGetOne(request: QueryFilterRequest): Promise<StudyYearReply>;
  StudyYearActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class StudyYearsClientImpl implements StudyYears {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "StudyYears";
    this.rpc = rpc;
    this.StudyYearActionCreate = this.StudyYearActionCreate.bind(this);
    this.StudyYearActionUpdate = this.StudyYearActionUpdate.bind(this);
    this.StudyYearActionQuery = this.StudyYearActionQuery.bind(this);
    this.StudyYearActionGetOne = this.StudyYearActionGetOne.bind(this);
    this.StudyYearActionRemove = this.StudyYearActionRemove.bind(this);
  }
  StudyYearActionCreate(
    request: StudyYearEntity
  ): Promise<StudyYearCreateReply> {
    const data = StudyYearEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "StudyYearActionCreate",
      data
    );
    return promise.then((data) =>
      StudyYearCreateReply.decode(new _m0.Reader(data))
    );
  }

  StudyYearActionUpdate(
    request: StudyYearEntity
  ): Promise<StudyYearCreateReply> {
    const data = StudyYearEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "StudyYearActionUpdate",
      data
    );
    return promise.then((data) =>
      StudyYearCreateReply.decode(new _m0.Reader(data))
    );
  }

  StudyYearActionQuery(
    request: QueryFilterRequest
  ): Promise<StudyYearQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "StudyYearActionQuery",
      data
    );
    return promise.then((data) =>
      StudyYearQueryReply.decode(new _m0.Reader(data))
    );
  }

  StudyYearActionGetOne(request: QueryFilterRequest): Promise<StudyYearReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "StudyYearActionGetOne",
      data
    );
    return promise.then((data) => StudyYearReply.decode(new _m0.Reader(data)));
  }

  StudyYearActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "StudyYearActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface Units {
  UnitActionCreate(request: UnitEntity): Promise<UnitCreateReply>;
  UnitActionUpdate(request: UnitEntity): Promise<UnitCreateReply>;
  UnitActionQuery(request: QueryFilterRequest): Promise<UnitQueryReply>;
  UnitActionGetOne(request: QueryFilterRequest): Promise<UnitReply>;
  UnitActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class UnitsClientImpl implements Units {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Units";
    this.rpc = rpc;
    this.UnitActionCreate = this.UnitActionCreate.bind(this);
    this.UnitActionUpdate = this.UnitActionUpdate.bind(this);
    this.UnitActionQuery = this.UnitActionQuery.bind(this);
    this.UnitActionGetOne = this.UnitActionGetOne.bind(this);
    this.UnitActionRemove = this.UnitActionRemove.bind(this);
  }
  UnitActionCreate(request: UnitEntity): Promise<UnitCreateReply> {
    const data = UnitEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnitActionCreate", data);
    return promise.then((data) => UnitCreateReply.decode(new _m0.Reader(data)));
  }

  UnitActionUpdate(request: UnitEntity): Promise<UnitCreateReply> {
    const data = UnitEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnitActionUpdate", data);
    return promise.then((data) => UnitCreateReply.decode(new _m0.Reader(data)));
  }

  UnitActionQuery(request: QueryFilterRequest): Promise<UnitQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnitActionQuery", data);
    return promise.then((data) => UnitQueryReply.decode(new _m0.Reader(data)));
  }

  UnitActionGetOne(request: QueryFilterRequest): Promise<UnitReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnitActionGetOne", data);
    return promise.then((data) => UnitReply.decode(new _m0.Reader(data)));
  }

  UnitActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnitActionRemove", data);
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error(
      "Value is larger than Number.MAX_SAFE_INTEGER"
    );
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
