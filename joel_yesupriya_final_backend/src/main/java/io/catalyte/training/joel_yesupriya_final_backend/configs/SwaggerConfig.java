package io.catalyte.training.joel_yesupriya_final_backend.configs;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.Collections;

@EnableSwagger2
//@PropertySource("classpath:swagger.properties")
@ComponentScan(basePackages = "controllers")
@Configuration
public class SwaggerConfig {
    private static final String SWAGGER_API_VERSION = "1.0";
    private static final String LICENSE_TEXT = "License";
    private static final String title = "Final Health Project REST API";
    private static final String description = "RESTful API example with Swagger";

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title(title)
                .description(description)
                .license(LICENSE_TEXT)
                .version(SWAGGER_API_VERSION)
                .build();
    }

    @Bean
    public Docket gardenCenterAPI() {
        return new Docket(DocumentationType.SWAGGER_2)
                .globalOperationParameters(
                        new ArrayList<>(Collections.singleton(new ParameterBuilder()
                                .name("Authorization")
                                .description("Bearer Authentication token")
                                .modelRef(new ModelRef("string"))
                                .parameterType("header")
                                .required(true)
                                .build()))
                )
                .apiInfo(apiInfo())
                .pathMapping("/")
                .select()
                .build();
    }
}

