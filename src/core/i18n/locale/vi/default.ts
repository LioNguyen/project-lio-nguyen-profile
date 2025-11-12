// Default namespace for Vietnamese translations
const defaultTranslations = {
  // Common
  common: {
    loading: 'Đang tải...',
    error: 'Lỗi',
    success: 'Thành công',
    warning: 'Cảnh báo',
    info: 'Thông tin',
    cancel: 'Hủy',
    confirm: 'Xác nhận',
    save: 'Lưu',
    delete: 'Xóa',
    edit: 'Chỉnh sửa',
    create: 'Tạo mới',
    update: 'Cập nhật',
    search: 'Tìm kiếm',
    filter: 'Lọc',
    clear: 'Xóa',
    apply: 'Áp dụng',
    close: 'Đóng',
    back: 'Quay lại',
    next: 'Tiếp theo',
    previous: 'Trước',
    submit: 'Gửi',
    reset: 'Đặt lại',
    refresh: 'Làm mới',
    scrollDown: 'Cuộn xuống',
    viewMore: 'Xem thêm',
    downloadCV: 'Tải CV',
    comingSoon: 'Sắp Ra Mắt',
  },

  // Navigation
  nav: {
    home: 'Trang chủ',
    skills: 'Kỹ năng',
    journey: 'Hành trình',
    projects: 'Dự án',
    about: 'Giới thiệu',
    contact: 'Liên hệ',
  },

  // Home Page
  home: {
    title: 'Nghi Nguyễn',
    subtitle: 'Kỹ sư Phần mềm',
    description: 'Lập trình không chỉ là một kỹ năng. Đó là con đường để tôi thể hiện sự sáng tạo và biến ý tưởng thành hiện thực.',
    downloadCV: 'Tải CV',
  },

  // Skills Page
  skills: {
    title: 'Kỹ Năng Của Tôi',
    frontendStack: 'Công nghệ Frontend',
    stateDataLayer: 'Quản lý State & Dữ liệu',
    uiStyling: 'Giao diện & Styling',
    tooling: 'Công cụ',
  },

  // Journey Page
  journey: {
    title: 'Hành Trình',
    fulltime: 'toàn thời gian',
    freelance: 'tự do',
    viewMore: 'Xem thêm →',
    
    // Experience 1 - Riskoa
    riskoa: {
      title: 'Kỹ sư Phần mềm',
      subtitle: 'Riskoa',
      time: 'Tháng 4/2025 - Tháng 10/2025',
      detail1: 'Thiết kế giải pháp frontend cho nền tảng SaaS doanh nghiệp phục vụ khách hàng toàn cầu trong lĩnh vực tuân thủ môi trường và phân tích dấu chân carbon.',
      detail2: 'Thiết kế hệ thống TypeScript module với schema API được định kiểu mạnh bằng Zod, giảm 60% thời gian phát triển.',
      detail3: 'Xây dựng hệ thống phân tích được hỗ trợ AI với tự động phân tách sản phẩm và ghép nối cơ sở dữ liệu khí thải.',
      detail4: 'Tạo dashboard trực quan hóa carbon thời gian thực hiển thị 500+ node kết nối qua ReactFlow với tối ưu hóa memoization.',
      detail5: 'Triển khai quản lý state tập trung sử dụng Zustand cho luồng state dự đoán được và subscription store nhẹ.',
      detail6: 'Giảm 80% overhead API thông qua auto-save debounced, logic batching và optimistic updates.',
      detail7: 'Thiết kế cấu trúc component dựa trên OOP có khả năng mở rộng sử dụng phân tách container/presenter và custom hooks cho logic dùng chung.',
      detail8: 'Triển khai Vitest unit và integration tests với coverage >85% cho business logic quan trọng.',
      detail9: 'Hợp tác trực tiếp với khách hàng UK về thiết kế tính năng, quy trình tuân thủ và lập kế hoạch sprint.',
      techStack: 'React.js, Lập trình Hướng đối tượng (OOP), Thiết kế Hệ thống',
    },
    
    // Experience 2 - DNB Soft
    dnbsoft: {
      title: 'Kỹ sư Phần mềm',
      subtitle: 'DNB Soft',
      time: 'Tháng 4/2024 - Tháng 9/2025',
      detail1: 'Kỹ sư frontend chính phân phối nền tảng web cấp doanh nghiệp cho khách hàng hàng hải và phần mềm Hàn Quốc.',
      detail2: 'Dẫn dắt frontend cho Hệ thống Quản lý Giấy phép Doanh nghiệp xử lý 5k+ bản ghi với phân trang phía server.',
      detail3: 'Thiết kế hệ thống kiểm soát truy cập dựa trên vai trò (RBAC) tích hợp với JWT authentication và Axios interceptors.',
      detail4: 'Phát triển dashboard an ninh mạng hàng hải thời gian thực sử dụng ReactFlow + custom polling hooks cho cập nhật trực tiếp.',
      detail5: 'Quản lý state toàn cục sử dụng React Context và custom hooks, đảm bảo luồng dữ liệu đáng tin cậy qua các module dashboard phức tạp.',
      detail6: 'Nâng cao hiệu suất render với useMemo, useCallback và kỹ thuật memoization.',
      detail7: 'Áp dụng cấu trúc component lấy cảm hứng từ OOP với patterns HOC/composition cho UI có thể tái sử dụng và tách biệt logic.',
      detail8: 'Xây dựng và chuẩn hóa nền tảng dự án với ESLint, Prettier, unit tests và integration tests, đảm bảo chất lượng nhất quán từ setup đến deployment.',
      detail9: 'Tạo tokens Design System nội bộ với Ant Design để đảm bảo tính nhất quán về mặt hình ảnh và liên kết thương hiệu.',
      detail10: 'Tạo thư viện component UI nội bộ với Storybook, cho phép thiết kế nhất quán giữa các team.',
      techStack: 'React.js, TypeScript, Thiết kế Hệ thống, Unit Testing, Integration Testing, Lập trình Hướng đối tượng (OOP)',
    },
    
    // Experience 3 - EveHR
    evehr: {
      title: 'Kỹ sư Phần mềm Frontend',
      subtitle: 'EveHR',
      time: 'Tháng 10/2021 - Tháng 2/2024',
      detail1: 'Hiện đại hóa nền tảng web và mobile cho khách hàng đa quốc gia bao gồm Bosch, Highland, PwC, AIA, BAT, DHL, Nestlé, Pepsi.',
      detail2: 'Thiết kế nền tảng SaaS white-label với theming động, routing module và xác thực đa thuê bao.',
      detail3: 'Di chuyển toàn bộ frontend từ JavaScript sang TypeScript, giảm 40% runtime errors.',
      detail4: 'Triển khai quản lý side-effect Redux Saga và Axios interceptors cho refresh token mượt mà.',
      detail5: 'Xây dựng hệ thống chia sẻ code đa nền tảng (React Web + React Native) cải thiện khả năng bảo trì.',
      detail6: 'Tối ưu hóa hiệu suất sử dụng Lazy Loading, Suspense và memoization, giảm 30% thời gian tải ban đầu.',
      detail7: 'Đóng góp vào thiết lập design system trong Storybook, cải thiện onboarding developer và tính nhất quán UI.',
      techStack: 'React.js, JavaScript, TypeScript, React Native, Ionic Framework',
    },
    
    // Experience 4 - JobHopin
    jobhopin: {
      title: 'Kỹ sư Phần mềm Frontend',
      subtitle: 'JobHopin',
      time: 'Tháng 7/2022 - Tháng 1/2023',
      detail1: 'Đóng góp vào phát triển frontend cho nền tảng JobHopin, tập trung vào xây dựng hệ thống UI có khả năng mở rộng, cải thiện hiệu suất và đảm bảo tính nhất quán thiết kế qua các dự án.',
      detail2: 'Phát triển và tài liệu hóa các component UI có thể tái sử dụng trong Storybook, nâng cao hiệu quả team và tính nhất quán hình ảnh.',
      detail3: 'Xây dựng Landing Page Next.js responsive cho sản phẩm mới, cải thiện tốc độ tải và trải nghiệm người dùng.',
      detail4: 'Duy trì và tối ưu hóa các tính năng hiện có cho hiệu suất và chất lượng code tốt hơn.',
      detail5: 'Hợp tác chặt chẽ với designers và product teams sử dụng Figma và Jira để đảm bảo phân phối mượt mà.',
      detail6: 'Hỗ trợ quy trình CI/CD và version control sử dụng GitLab, cải thiện độ tin cậy deployment.',
      techStack: 'React.js, HTML5, JavaScript, Next.js, Storybook, Scss',
    },
    
    // Experience 5 - ITL Corp
    itlcorp: {
      title: 'Kế toán Khu vực',
      subtitle: 'Tập đoàn Indo-Trans Logistics (ITL Corp.)',
      time: 'Tháng 9/2019 - Tháng 5/2021',
      detail1: 'Chuẩn bị báo cáo tài chính hàng tháng cho hoạt động Myanmar và Lào.',
      detail2: 'Chuẩn bị và ghi nhận costing, internal và OBH entries bằng cách biên soạn và phân tích thông tin tài khoản.',
      detail3: 'Duy trì và cân đối các tài khoản chi nhánh bằng cách xác minh, phân bổ, đăng và đối soát giao dịch và giải quyết sự khác biệt.',
      detail4: 'Đối soát costing/revenue giữa FAST và Bravo, phối hợp với kế toán Revenue và team CS.',
      detail5: 'Quản lý costing trên FAST, giải quyết thanh toán tạm ứng, giải quyết thanh toán và thực hiện thủ tục kế toán trên FAST.',
      detail6: 'Quản lý báo cáo vận chuyển, theo dõi cập nhật hàng ngày, đối soát với yêu cầu thanh toán.',
      detail7: 'Xác minh số dư nội bộ giữa ITL Myanmar và Corp/Subsidiaries.',
      detail8: 'Tạo công cụ VBA để tạo điều kiện cho thủ tục kế toán.',
      techStack: 'Kế toán, Microsoft Excel, Cải tiến Quy trình, Kế toán Chi phí',
    },
    
    // Experience 6 - Fram^
    fram: {
      title: 'Kế toán Tổng hợp',
      subtitle: 'Fram^',
      time: 'Tháng 9/2017 - Tháng 2/2019',
      detail1: 'Chuẩn bị nhập Journal Entries vào Hệ thống Kế toán (MISA).',
      detail2: 'Đối soát ngân hàng hàng tháng và liên lạc trực tiếp với các ngân hàng cho các vấn đề liên quan (Vietcombank, VIB, HSBC, ANZ).',
      detail3: 'Phụ trách quy trình thanh toán hàng tuần cho 4 đơn vị trong tập đoàn.',
      detail4: 'Phụ trách Phải trả, Phải thu và phát hành hóa đơn cho khách hàng.',
      detail5: 'Hỗ trợ team sale trong việc theo dõi thu tiền.',
      detail6: 'Hàng tháng chuẩn bị so sánh dữ liệu budget vs actual.',
      detail7: 'Hàng tháng chuẩn bị Báo cáo Thuế để áp dụng cơ quan Thuế (VAT, PIT, FCT) và liên lạc với Cơ quan Thuế cho bất kỳ vấn đề liên quan nào.',
      detail8: 'Đồng thời phụ trách báo cáo tài chính nội bộ đóng cuối tháng của 4 đơn vị cho Trụ sở chính ở Thụy Điển.',
      detail9: 'Trực tiếp thảo luận và giải quyết các vấn đề tài chính liên quan với các CEO của tập đoàn Fram (Thụy Điển, Anh, Mỹ).',
      techStack: 'Microsoft Excel, Kế toán',
    },
  },

  // Projects Page
  projects: {
    title: 'Dự Án Của Tôi',
    comingSoonTitle: 'Sắp Ra Mắt',
    comingSoonDescription: 'Phần này đang trong quá trình phát triển.',
    viewProject: 'Xem Dự án',
    viewGithub: 'Xem GitHub',
    
    // Project 1 - AI Note
    aiNote: {
      title: 'AI Note',
      description: 'Ứng dụng ghi chú thông minh với tích hợp AI, được xây dựng với OpenAI, Pinecone, Next.js, Shadcn UI, Clerk và nhiều công nghệ khác.',
    },
    
    // Project 2 - Movie Browser
    movieBrowser: {
      title: 'Movie Browser',
      description: 'Ứng dụng duyệt phim với tích hợp TMDB API, bao gồm tính năng tìm kiếm, lọc giữa các phim Đang Chiếu và Được Đánh Giá Cao, xem chi tiết phim với đánh giá và thống kê, và thiết kế responsive với cả chế độ lưới và danh sách.',
    },
  },

  // About Page
  about: {
    title: 'Giới Thiệu',
    paragraph1: 'Những năm phổ thông, tôi là thành viên đội tuyển Tin học trường THPT chuyên Trần Đại Nghĩa. Tôi từng tham gia vòng chung kết kỳ thi Olympic Tin học, và cũng đạt được chứng chỉ Microsoft Office Specialist. Nhưng rồi, khi đứng trước ngã rẽ đại học, tôi đã chọn một con đường khác - Kế toán & Kiểm toán tại Đại học Ngân hàng TP.HCM. Lúc đó, tôi nghĩ mình đang thực tế, đang chọn sự an toàn thay vì đam mê.',
    
    paragraph2: 'Gần 4 năm làm kế toán, công việc ổn định, thu nhập đều đặn. Nhưng mỗi ngày trôi qua, tôi cảm thấy khoảng cách giữa những gì mình đang làm và những gì mình thực sự muốn làm ngày càng xa xôi. Tôi nhìn các lập trình viên xây dựng những sản phẩm chạm đến hàng triệu con tim, trong khi mình chỉ đối chiếu từng dòng số liệu trên bảng tính. Nỗi sợ hãi về việc bắt đầu lại ở tuổi 27, không có bằng Khoa học Máy tính chính quy, gần như đã khiến tôi dừng bước. "Liệu có quá muộn? Liệu mình có thực sự làm được không?" - những câu hỏi ấy cứ ám ảnh tôi đêm này qua đêm khác.',
    
    paragraph3: 'Năm 2021, tôi đã đưa ra quyết định khó khăn nhất trong đời: tự học lập trình từ con số không. Những tháng đầu quả thật tàn khốc. Tôi thức trắng từng đêm để debug những dòng code tưởng chừng như bất khả thi, xem đi xem lại tutorial đến tận mấy chục lần, mãi vẫn cảm giác như mình là người duy nhất chẳng hiểu gì cả. Có những khoảnh khắc tôi muốn buông xuôi - khi một bug đơn giản nhưng mất cả tuần mới sửa được, khi các buổi phỏng vấn liên tục từ chối vì "thiếu kinh nghiệm thực tế", khi tự hỏi liệu những năm tháng vừa qua có phải là một sự lãng phí?',
    
    paragraph4: 'Nhưng tôi không dừng lại. Và rồi, chính nền tảng kế toán - thứ mà tôi từng nghĩ là bất lợi - lại trở thành vũ khí bí mật của tôi. Tôi hiểu logic nghiệp vụ, quy trình người dùng, và độ tin cậy của hệ thống theo một cách mà những người học bootcamp thông thường không có. Tôi học được cách chia nhỏ vấn đề phức tạp thành từng mảnh ghép - đúng như kỹ năng tôi đã dùng để cân đối sổ sách. Từ từ, từng chiến thắng nhỏ một, tôi xây dựng lại niềm tin vào bản thân. Mỗi bug được giải quyết, mỗi tính năng chạy trơn tru, mỗi khoảnh khắc "eureka!" đều là minh chứng: tôi làm được!',
    
    paragraph5: 'Hôm nay, sau hơn 4 năm, tôi đã chứng minh cho chính mình: không bao giờ là quá muộn để theo đuổi điều mình yêu thích. Hành trình từ kế toán sang công nghệ không phải về tài năng thiên bẩm - mà là về việc không bỏ cuộc, xuất hiện mỗi ngày, đặc biệt là những ngày tồi tệ nhất. Nếu bạn đang nghĩ đến việc chuyển nghề, học một điều gì đó mới mẻ, hay theo đuổi một giấc mơ tưởng chừng như viễn vông: hãy bắt đầu dù lộn xộn, hãy kiên trì dù khó khăn, và hãy tin vào quá trình. Quá khứ của bạn không giới hạn bạn - nó đang tôi luyện, chuẩn bị cho bạn để tỏa sáng.',
  },

  // Contact Page
  contact: {
    title: 'Liên Hệ',
    subtitle: 'Hãy Kết Nối Với Tôi',
    email: 'Email',
    phone: 'Điện Thoại',
    emailValue: 'lio.nguyen.work@gmail.com',
    phoneValue: '+84 934 118 566',
  },
} as const

export default defaultTranslations
